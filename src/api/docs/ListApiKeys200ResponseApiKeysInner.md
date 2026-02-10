
# ListApiKeys200ResponseApiKeysInner


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`key` | string
`description` | string
`isActive` | boolean
`usageCount` | number
`createdAt` | string
`lastUsedAt` | string

## Example

```typescript
import type { ListApiKeys200ResponseApiKeysInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "key": null,
  "description": null,
  "isActive": null,
  "usageCount": null,
  "createdAt": null,
  "lastUsedAt": null,
} satisfies ListApiKeys200ResponseApiKeysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListApiKeys200ResponseApiKeysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


