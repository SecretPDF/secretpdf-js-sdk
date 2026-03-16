import {
  Configuration,
  AuthenticationApi,
  DocumentsApi,
  TemplatesApi,
  ResponseError,
} from './api/index';
import type {
  GenerateDocument200Response,
  GetGenerationStats200Response,
  GetUsageStats200Response,
  ListGenerationRecords200Response,
  CreateTemplate200Response,
  ListTemplates200Response,
} from './api/models/index';

type TemplateResponse = CreateTemplate200Response;
type TemplatesResponse = ListTemplates200Response; 

/**
 * Enhanced error class that includes the parsed error body from the API
 */
export class SecretPDFError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly body: any;
  public readonly errorCode?: string;
  public readonly errorMessage?: string;
  
  constructor(responseError: ResponseError, body: any) {
    const message = body?.message || body?.error || responseError.message || 'An error occurred';
    super(message);
    
    this.name = 'SecretPDFError';
    this.status = responseError.response.status;
    this.statusText = responseError.response.statusText;
    this.body = body;
    this.errorCode = body?.error || body?.code || body?.errorCode;
    this.errorMessage = body?.message || body?.errorMessage;
  }
}

/**
 * Helper function to parse error response body
 */
async function parseErrorBody(response: Response): Promise<any> {
  try {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.clone().json();
    } else {
      return await response.clone().text();
    }
  } catch {
    return null;
  }
}

/**
 * Wrapper to handle API errors and parse error bodies
 */
async function handleApiCall<T>(apiCall: Promise<T>): Promise<T> {
  try {
    return await apiCall;
  } catch (error) {
    if (error instanceof ResponseError) {
      const body = await parseErrorBody(error.response);
      throw new SecretPDFError(error, body);
    }
    throw error;
  }
}


/**
 * Configuration options for the Secret PDF client
 */
export interface SecretPDFConfig {
  /**
   * API key for authentication
   */
  apiKey?: string;
  
  /**
   * Access token for OAuth2 authentication
   */
  accessToken?: string;
  
  /**
   * Custom headers to include in all requests
   */
  headers?: Record<string, string>;
  
  /**
   * Custom fetch implementation
   */
  fetchApi?: typeof fetch;
}

/**
 * Additional client options
 */
export interface SecretPDFClientOptions extends SecretPDFConfig {
  /**
   * Whether to use credentials in requests
   */
  credentials?: RequestCredentials;
}

/**
 * Storage configuration for generated documents
 */
export interface StorageConfig {
  /**
   * Enable storage upload
   */
  enabled?: boolean;
  /**
   * Storage configuration key
   */
  storageKey?: string;
}

/**
 * Main Secret PDF SDK Client
 * 
 * @example
 * ```typescript
 * import { SecretPDFClient } from '@secretpdf/sdk';
 * 
 * const client = new SecretPDFClient({
 *   apiKey: 'your-api-key'
 * });
 * 
 * // Generate a PDF
 * const result = await client.generate({
 *   templateId: 'template-123',
 *   data: { name: 'John' }
 * });
 * ```
 */
export class SecretPDFClient {
  private config: Configuration;
  private documentsApi: DocumentsApi;
  private templatesApi: TemplatesApi;
  
  /**
   * Authentication operations (direct API access)
   */
  public readonly auth: AuthenticationApi;

  /**
   * Creates a new Secret PDF client instance
   * 
   * @param options - Configuration options for the client
   */
  constructor(options: SecretPDFClientOptions = {}) {
    const {
      apiKey,
      accessToken,
      headers,
      fetchApi,
      credentials,
    } = options;

    this.config = new Configuration({
      basePath: 'https://api.secretpdf.io',
      apiKey,
      accessToken,
      headers,
      fetchApi,
      credentials,
    });

    // Initialize API clients
    this.auth = new AuthenticationApi(this.config);
    this.documentsApi = new DocumentsApi(this.config);
    this.templatesApi = new TemplatesApi(this.config);
  }

  /**
   * Generate a PDF document from a template
   * 
   * @param templateId - ID of the stored template to use
   * @param data - Data to inject into the template
   * @param storage - Optional storage configuration
   * @param returnFile - If true, return PDF in response (default: true)
   * @param html - HTML content instead of templateId
   * @param orientation - Page orientation if html is set (portrait | landscape)
   * @param sandbox - If true, add SECRET watermark and charge 0 credits
   * @returns Promise with the generated document response
   * 
   * @example
   * ```typescript
   * const result = await client.generate({
   *   templateId: 'template-123',
   *   data: { customerName: 'John Doe', amount: 100 }
   * });
   * ```
   */
  async generate(params: {
    templateId?: string;
    data?: Record<string, any>;
    storage?: StorageConfig;
    size?: string;
    html?: string;
    orientation?: string;
    returnFile?: boolean;
    sandbox?: boolean;
  }): Promise<GenerateDocument200Response> {
    return handleApiCall(this.documentsApi.generateDocument({
      generateDocumentRequest: {
        templateId: params.templateId,
        data: params.data,
        storage: params.storage,
        size: params.size,
        html: params.size,
        orientation: params.size,
        returnFile: params.returnFile,
        sandbox: params.sandbox,
      }
    }));
  }

  /**
   * Get overall generation statistics
   * 
   * @returns Promise with generation statistics
   * 
   * @example
   * ```typescript
   * const stats = await client.getGenerationStats();
   * console.log(stats.stats);
   * ```
   */
  async getGenerationStats(): Promise<GetGenerationStats200Response> {
    return handleApiCall(this.documentsApi.getGenerationStats());
  }

  /**
   * Get usage statistics
   * 
   * @returns Promise with usage statistics
   * 
   * @example
   * ```typescript
   * const usage = await client.getUsageStats();
   * console.log(usage.stats);
   * ```
   */
  async getUsageStats(): Promise<GetUsageStats200Response> {
    return handleApiCall(this.documentsApi.getUsageStats());
  }

  /**
   * List generation records with pagination
   * 
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 50)
   * @returns Promise with generation records
   * 
   * @example
   * ```typescript
   * const records = await client.listGenerationRecords({ page: 1, limit: 10 });
   * ```
   */
  async listGenerationRecords(params?: {
    page?: number;
    limit?: number;
  }): Promise<ListGenerationRecords200Response> {
    return handleApiCall(this.documentsApi.listGenerationRecords({
      page: params?.page,
      limit: params?.limit,
    }));
  }

  /**
   * Create a new HTML template
   * 
   * @param content - HTML template content (required)
   * @param name - Name of the template
   * @param size - Page size (e.g., A4, Letter, 100mm|100mm)
   * @param orientation - Page orientation (portait | landscape)
   * @returns Promise with created template
   * 
   * @example
   * ```typescript
   * const template = await client.createTemplate({
   *   content: '<html><body>{{content}}</body></html>',
   *   name: 'Invoice Template',
   *   size: 'A4'
   * });
   * ```
   */
  async createTemplate(params: {
    content: string;
    name?: string;
    size?: string;
    orientation?: string;
  }): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.createTemplate({
      createTemplateRequest: {
        content: params.content,
        name: params.name,
        size: params.size,
        orientation: params.orientation
      }
    }));
  }

  /**
   * List all templates
   * 
   * @returns Promise with list of templates
   * 
   * @example
   * ```typescript
   * const templates = await client.listTemplates();
   * ```
   */
  async listTemplates(): Promise<TemplatesResponse> {
    return handleApiCall(this.templatesApi.listTemplates());
  }

  /**
   * Get a specific template by ID
   * 
   * @param templateId - The template ID
   * @returns Promise with template details
   * 
   * @example
   * ```typescript
   * const template = await client.getTemplate('template-123');
   * ```
   */
  async getTemplate(templateId: string): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.getTemplate({ templateId }));
  }

  /**
   * Update an existing template
   * 
   * @param id - The template ID
   * @param content - New HTML content
   * @param name - New template name
   * @param size - New page size
   * @param orientation - New page orientation
   * @returns Promise with updated template
   * 
   * @example
   * ```typescript
   * const updated = await client.updateTemplate({
   *   id: 'template-123',
   *   name: 'Updated Invoice',
   *   content: '<html>...</html>'
   * });
   * ```
   */
  async updateTemplate(
    id: string,
    params: {
    content?: string;
    name?: string;
    size?: string;
    orientation?: string;
  }): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.updateTemplate({
      templateId: id,
      updateTemplateRequest: {
        content: params.content,
        name: params.name,
        size: params.size,
        orientation: params.orientation
      }
    }));
  }

  /**
   * Delete a template
   * 
   * @param templateId - The template ID to delete
   * @returns Promise with deletion response
   * 
   * @example
   * ```typescript
   * await client.deleteTemplate('template-123');
   * ```
   */
  async deleteTemplate(templateId: string): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.deleteTemplate({ templateId }));
  }

  /**
   * Generate a template from a PDF file
   * 
   * @param file - The PDF file as a Blob
   * @returns Promise with generated template
   * 
   * @example
   * ```typescript
   * const file = new Blob([pdfData], { type: 'application/pdf' });
   * const template = await client.generateTemplateFromPdf(file);
   * ```
   */
  async generateTemplateFromPdf(file: Blob): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.generateTemplateFromPdf({ file }));
  }

  /**
   * Generate a template from a text prompt using AI
   * 
   * @param prompt - Description of the desired template
   * @param params - Data fields that will be used as placeholders
   * @param name - Optional name for the generated template
   * @returns Promise with generated template
   * 
   * @example
   * ```typescript
   * const template = await client.generateTemplateFromPrompt({
   *   prompt: 'Create an invoice template with header and items table',
   *   params: { customerName: '', items: [], total: '' },
   *   templateName: 'AI Invoice Template'
   * });
   * ```
   */
  async generateTemplateFromPrompt(params: {
    prompt: string;
    params: Record<string, any>;
    name?: string;
  }): Promise<TemplateResponse> {
    return handleApiCall(this.templatesApi.generateTemplateFromPrompt({
      generateTemplateFromPromptRequest: {
        prompt: params.prompt,
        params: params.params,
        name: params.name,
      }
    }));
  }

  /**
   * Update the client configuration
   * 
   * @param options - New configuration options
   */
  updateConfig(options: Partial<SecretPDFClientOptions>): void {
    const currentConfig = this.config;
    
    this.config = new Configuration({
      basePath: 'https://api.secretpdf.io',
      apiKey: options.apiKey !== undefined ? options.apiKey : currentConfig.apiKey?.(''),
      accessToken: options.accessToken !== undefined ? options.accessToken : currentConfig.accessToken?.(),
      headers: options.headers || currentConfig.headers,
      fetchApi: options.fetchApi || currentConfig.fetchApi,
      credentials: options.credentials || currentConfig.credentials,
    });

    // Re-initialize all API clients with new config
    this.auth['configuration'] = this.config;
    this.documentsApi['configuration'] = this.config;
    this.templatesApi['configuration'] = this.config;
  }
}
