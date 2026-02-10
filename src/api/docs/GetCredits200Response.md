
# GetCredits200Response


## Properties

Name | Type
------------ | -------------
`success` | boolean
`creditsUsed` | number
`creditsRemaining` | number
`isSubscribed` | boolean
`needsSubscription` | boolean

## Example

```typescript
import type { GetCredits200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "creditsUsed": null,
  "creditsRemaining": null,
  "isSubscribed": null,
  "needsSubscription": null,
} satisfies GetCredits200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCredits200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


