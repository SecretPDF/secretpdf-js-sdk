
# ListGenerationRecords200ResponseDataItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`apiKeyId` | string
`templateId` | string
`userId` | string
`status` | string
`creditsUsed` | number
`pdfSizeBytes` | number
`generationStart` | string
`generationEnd` | string
`sandbox` | boolean
`templateName` | string

## Example

```typescript
import type { ListGenerationRecords200ResponseDataItemsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "apiKeyId": null,
  "templateId": null,
  "userId": null,
  "status": null,
  "creditsUsed": null,
  "pdfSizeBytes": null,
  "generationStart": null,
  "generationEnd": null,
  "sandbox": null,
  "templateName": null,
} satisfies ListGenerationRecords200ResponseDataItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListGenerationRecords200ResponseDataItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


