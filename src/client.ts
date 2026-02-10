import {
  Configuration,
  AuthenticationApi,
  DocumentsApi,
  TemplatesApi,
} from './api/index';
import type {
  GenerateDocument200Response,
  GetGenerationStats200Response,
  GetUsageStats200Response,
  ListGenerationRecords200Response,
  CreateTemplate200Response,
  ListTemplates200Response,
  ListTemplates200ResponseTemplatesInner,
} from './api/models/index';

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
    returnFile?: boolean;
    sandbox?: boolean;
  }): Promise<GenerateDocument200Response> {
    return this.documentsApi.generateDocument({
      generateDocumentRequest: {
        templateId: params.templateId,
        data: params.data,
        storage: params.storage,
        returnFile: params.returnFile,
        sandbox: params.sandbox,
      }
    });
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
    return this.documentsApi.getGenerationStats();
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
    return this.documentsApi.getUsageStats();
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
    return this.documentsApi.listGenerationRecords({
      page: params?.page,
      limit: params?.limit,
    });
  }

  /**
   * Create a new HTML template
   * 
   * @param templateContent - HTML template content (required)
   * @param templateName - Name of the template
   * @param templateSize - Page size (e.g., A4, Letter, 100mm|100mm)
   * @returns Promise with created template
   * 
   * @example
   * ```typescript
   * const template = await client.createTemplate({
   *   templateContent: '<html><body>{{content}}</body></html>',
   *   templateName: 'Invoice Template',
   *   templateSize: 'A4'
   * });
   * ```
   */
  async createTemplate(params: {
    templateContent: string;
    templateName?: string;
    templateSize?: string;
  }): Promise<CreateTemplate200Response> {
    return this.templatesApi.createTemplate({
      createTemplateRequest: {
        templateContent: params.templateContent,
        templateName: params.templateName,
        templateSize: params.templateSize,
      }
    });
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
  async listTemplates(): Promise<ListTemplates200Response> {
    return this.templatesApi.listTemplates();
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
  async getTemplate(templateId: string): Promise<ListTemplates200ResponseTemplatesInner> {
    return this.templatesApi.getTemplate({ templateId });
  }

  /**
   * Update an existing template
   * 
   * @param templateId - The template ID
   * @param templateContent - New HTML content
   * @param templateName - New template name
   * @param templateSize - New page size
   * @returns Promise with updated template
   * 
   * @example
   * ```typescript
   * const updated = await client.updateTemplate({
   *   templateId: 'template-123',
   *   templateName: 'Updated Invoice',
   *   templateContent: '<html>...</html>'
   * });
   * ```
   */
  async updateTemplate(params: {
    templateId: string;
    templateContent?: string;
    templateName?: string;
    templateSize?: string;
  }): Promise<CreateTemplate200Response> {
    return this.templatesApi.updateTemplate({
      templateId: params.templateId,
      updateTemplateRequest: {
        templateContent: params.templateContent,
        templateName: params.templateName,
        templateSize: params.templateSize,
      }
    });
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
  async deleteTemplate(templateId: string): Promise<void> {
    await this.templatesApi.deleteTemplate({ templateId });
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
  async generateTemplateFromPdf(file: Blob): Promise<CreateTemplate200Response> {
    return this.templatesApi.generateTemplateFromPdf({ file });
  }

  /**
   * Generate a template from a text prompt using AI
   * 
   * @param prompt - Description of the desired template
   * @param params - Data fields that will be used as placeholders
   * @param templateName - Optional name for the generated template
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
    templateName?: string;
  }): Promise<CreateTemplate200Response> {
    return this.templatesApi.generateTemplateFromPrompt({
      generateTemplateFromPromptRequest: {
        prompt: params.prompt,
        params: params.params,
        templateName: params.templateName,
      }
    });
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
