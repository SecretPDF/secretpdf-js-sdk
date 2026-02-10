
# AuthInvoicesGet200Response


## Properties

Name | Type
------------ | -------------
`success` | boolean
`invoices` | [Array&lt;AuthInvoicesGet200ResponseInvoicesInner&gt;](AuthInvoicesGet200ResponseInvoicesInner.md)
`pagination` | [AuthInvoicesGet200ResponsePagination](AuthInvoicesGet200ResponsePagination.md)

## Example

```typescript
import type { AuthInvoicesGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "invoices": null,
  "pagination": null,
} satisfies AuthInvoicesGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthInvoicesGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


