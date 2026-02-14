/**
 * Secret PDF SDK
 * 
 * A TypeScript/JavaScript SDK for the Secret PDF API.
 * Generate PDFs from HTML templates with AI assistance.
 */

// Export all API classes and types from the generated API
export * from './api/index';

// Export the main SDK client class and error class
export { SecretPDFClient, SecretPDFError } from './client';

// Export configuration types
export type {
  SecretPDFConfig,
  SecretPDFClientOptions
} from './client';
