/**
 * Example usage of the Secret PDF SDK
 * 
 * This example demonstrates how to generate a PDF document from HTML
 * with custom orientation and size.
 */
import fs from 'fs';
import { SecretPDFClient } from './src/index';

// Initialize the client
const client = new SecretPDFClient({
  apiKey: '1eb2ccf5-7575-4aea-8b45-1ad20024bda5'
});

// Generate a PDF document from HTML with orientation and size
async function generateDocumentFromHTML() {
  try {
    const result = await client.generate({
      html: `
          <main>
            <h1>Document with Custom Orientation and Size</h1>
            <div>
              <p>This PDF is generated with custom settings:</p>
              <ul>
                <li>Orientation: Landscape</li>
                <li>Size: A4</li>
              </ul>
              <p>You can modify these settings to fit your needs.</p>
            </div>
          </main>
      `,
      orientation: 'landscape',
      size: 'A4',
      sandbox: true
    });
    
    console.log('PDF generated successfully:', result);
    return result;
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

// Run the example (uncomment to test)
const file = generateDocumentFromHTML().then(result => {
  if(result) {
    // Decode base64 and store file
    const buffer = Buffer.from(result.data!, 'base64');
    fs.writeFileSync('generated_document.pdf', buffer);
  }
});