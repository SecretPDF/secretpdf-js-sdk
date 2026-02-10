
# GenerateDocumentRequest


## Properties

Name | Type
------------ | -------------
`templateId` | string
`data` | object
`storage` | [GenerateDocumentRequestStorage](GenerateDocumentRequestStorage.md)
`returnFile` | boolean
`sandbox` | boolean

## Example

```typescript
import type { GenerateDocumentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "templateId": null,
  "data": null,
  "storage": null,
  "returnFile": null,
  "sandbox": null,
} satisfies GenerateDocumentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateDocumentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


