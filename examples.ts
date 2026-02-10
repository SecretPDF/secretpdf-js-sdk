/**
 * Example usage of the Secret PDF SDK
 * 
 * This file demonstrates various ways to use the SDK.
 * These examples are for reference only and are not published with the package.
 */

import { SecretPDFClient } from './src/index';

// ============================================
// 1. Initialize the client
// ============================================

const client = new SecretPDFClient({
  apiKey: 'your-api-key-here',
  basePath: 'https://api.secretpdf.com'
});

// ============================================
// 2. Generate a simple PDF
// ============================================

async function generateSimplePDF() {
  try {
    const result = await client.documents.generatePost({
      template: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              h1 { color: #333; }
            </style>
          </head>
          <body>
            <h1>Hello World</h1>
            <p>This is a simple PDF generated with Secret PDF.</p>
          </body>
        </html>
      `,
      data: {}
    });
    
    console.log('PDF generated successfully:', result);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

// ============================================
// 3. Generate PDF with template variables
// ============================================

async function generateInvoice() {
  const invoiceTemplate = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; }
          .header { text-align: center; margin-bottom: 30px; }
          .invoice-details { margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          .total { font-weight: bold; font-size: 1.2em; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>INVOICE</h1>
          <p>Invoice #{{invoiceNumber}}</p>
        </div>
        
        <div class="invoice-details">
          <p><strong>Bill To:</strong> {{customerName}}</p>
          <p><strong>Date:</strong> {{date}}</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {{#items}}
            <tr>
              <td>{{description}}</td>
              <td>{{quantity}}</td>
              <td>${{price}}</td>
              <td>${{total}}</td>
            </tr>
            {{/items}}
          </tbody>
        </table>
        
        <p class="total">Total: ${{totalAmount}}</p>
      </body>
    </html>
  `;

  try {
    const result = await client.documents.generatePost({
      template: invoiceTemplate,
      data: {
        invoiceNumber: 'INV-001',
        customerName: 'John Doe',
        date: new Date().toLocaleDateString(),
        items: [
          { description: 'Web Development', quantity: 10, price: 100, total: 1000 },
          { description: 'Consulting', quantity: 5, price: 150, total: 750 }
        ],
        totalAmount: 1750
      }
    });
    
    console.log('Invoice generated:', result);
  } catch (error) {
    console.error('Error generating invoice:', error);
  }
}

// ============================================
// 4. Save PDF to storage
// ============================================

async function generateAndStore() {
  try {
    const result = await client.documents.generatePost({
      template: '<html><body><h1>Stored Document</h1></body></html>',
      data: {},
      storage: {
        provider: 's3',
        bucket: 'my-pdf-bucket',
        key: `documents/${Date.now()}.pdf`
      }
    });
    
    console.log('PDF generated and stored:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============================================
// 5. Work with templates
// ============================================

async function useTemplates() {
  try {
    // Create a template
    const template = await client.templates.templatesPost({
      name: 'Receipt Template',
      content: `
        <html>
          <body>
            <h1>Receipt</h1>
            <p>Amount: {{amount}}</p>
            <p>Date: {{date}}</p>
          </body>
        </html>
      `,
      description: 'Standard receipt template'
    });
    
    console.log('Template created:', template);
    
    // List all templates
    const templates = await client.templates.templatesGet();
    console.log('All templates:', templates);
    
    // Generate from template (if template has an ID)
    // const pdf = await client.templates.templatesTemplateIdGeneratePost(
    //   templateId,
    //   { data: { amount: '$50.00', date: new Date().toLocaleDateString() } }
    // );
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============================================
// 6. Manage API keys
// ============================================

async function manageApiKeys() {
  try {
    // List API keys
    const keys = await client.apiKeys.apiKeysGet();
    console.log('API Keys:', keys);
    
    // Create new API key
    const newKey = await client.apiKeys.apiKeysPost({
      name: 'Production Key',
      scopes: ['documents:generate', 'templates:read']
    });
    console.log('New API key created:', newKey);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============================================
// 7. Get user information and stats
// ============================================

async function getUserInfo() {
  try {
    // Get current user
    const user = await client.auth.authMeGet();
    console.log('Current user:', user);
    
    // Get billing info
    const billing = await client.auth.authBillingGet();
    console.log('Billing:', billing);
    
    // Get usage stats
    const stats = await client.documents.documentsUsageStatsGet();
    console.log('Usage stats:', stats);
    
    // Get generation stats
    const genStats = await client.documents.documentsGenerationStatsGet();
    console.log('Generation stats:', genStats);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============================================
// 8. Update client configuration
// ============================================

function updateConfiguration() {
  // Create client with initial config
  const myClient = new SecretPDFClient({
    apiKey: 'initial-key'
  });
  
  // Later, update the configuration
  myClient.updateConfig({
    apiKey: 'new-key',
    headers: {
      'X-Custom-Header': 'custom-value'
    }
  });
  
  console.log('Client configuration updated');
}

// ============================================
// Run examples (uncomment to test)
// ============================================

// generateSimplePDF();
// generateInvoice();
// generateAndStore();
// useTemplates();
// manageApiKeys();
// getUserInfo();
// updateConfiguration();
