# Secret PDF SDK

A TypeScript/JavaScript SDK for the Secret PDF API. Generate beautiful PDFs from HTML templates with AI assistance.

[![npm version](https://badge.fury.io/js/@secretpdf%2Fsdk.svg)](https://www.npmjs.com/package/@secretpdf/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @secretpdf/sdk
```

Or with yarn:

```bash
yarn add @secretpdf/sdk
```

Or with pnpm:

```bash
pnpm add @secretpdf/sdk
```

## Quick Start

```typescript
import { SecretPDFClient } from '@secretpdf/sdk';

// Initialize the client
const client = new SecretPDFClient({
  apiKey: 'your-api-key-here'
});

// Generate a PDF from a template
const result = await client.generate({
  templateId: 'your-template-id',
  returnFile: true,
  data: { name: 'World' }
});

console.log('PDF generated:', result);
// result.data contains the Base64 raw data of the PDF
```

## Usage

### Authentication

The SDK supports multiple authentication methods:

#### API Key Authentication

```typescript
const client = new SecretPDFClient({
  apiKey: 'your-api-key-here'
});
```

### Document Generation

Generate PDFs from templates:

```typescript
// Generate from a template
const pdfResult = await client.generate({
  templateId: 'template-123',
  data: {
    customerName: 'John Doe',
    amount: '$250.00'
  }
});


// Use sandbox mode for testing (adds watermark, no credit charge)
const sandboxPdf = await client.generate({
  templateId: 'template-123',
  data: {},
  sandbox: true
});
```

### Template Management

Manage reusable templates:

```typescript
// Create a template
const newTemplate = await client.createTemplate({
  templateContent: '<html><body><h1>{{title}}</h1><p>{{content}}</p></body></html>',
  templateName: 'Invoice Template',
  templateSize: 'A4'
});

// List all templates
const templates = await client.listTemplates();

// Get a specific template
const template = await client.getTemplate('template-123');

// Update a template
const updated = await client.updateTemplate({
  templateId: 'template-123',
  templateName: 'Updated Invoice Template',
  templateContent: '<html><body>Updated content</body></html>'
});

// Delete a template
await client.deleteTemplate('template-123');
```

### AI-Powered Template Generation

Generate templates from PDF files or text prompts:

```typescript
// Generate template from a PDF file
const pdfFile = new Blob([pdfData], { type: 'application/pdf' });
const templateFromPdf = await client.generateTemplateFromPdf(pdfFile);

// Generate template from a text prompt using AI
const templateFromPrompt = await client.generateTemplateFromPrompt({
  prompt: 'Create a professional invoice template with company header, itemized table, and total section',
  params: { 
    companyName: '', 
    customerName: '', 
    items: [], 
    total: '' 
  },
  templateName: 'AI Invoice Template'
});
```

### Custom Fetch Implementation

```typescript
import fetch from 'node-fetch';

const client = new SecretPDFClient({
  apiKey: 'your-api-key',
  fetchApi: fetch as any
});
```


## TypeScript Support

This SDK is written in TypeScript and includes full type definitions. All methods and parameters are fully typed.

```typescript
import { SecretPDFClient } from '@secretpdf/sdk';

const client = new SecretPDFClient({ apiKey: 'key' });

// All parameters are type-checked
const result = await client.generate({
  templateId: 'template-123',
  data: { name: 'John' }  // data is typed as Record<string, any>
});

// Response types are also fully typed
console.log(result.data?.url); // TypeScript knows the structure
```

## Error Handling

```typescript
try {
  const result = await client.generate({
    templateId: 'template-123',
    data: {}
  });
  console.log('Success:', result);
} catch (error) {
  if (error instanceof Response) {
    const errorData = await error.json();
    console.error('API Error:', errorData);
  } else {
    console.error('Network Error:', error);
  }
}
```

## License

MIT

## Support

For issues, questions, or contributions, please visit:
- GitHub: https://github.com/SecretPDF/secretpdf-js-sdk
- Documentation: https://docs.secretpdf.io

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
