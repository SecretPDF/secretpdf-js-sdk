
# AuthInvoicesGet200ResponseInvoicesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`createdAt` | string
`status` | string
`paid` | boolean
`invoiceNumber` | string
`totalAmount` | number
`currency` | string
`dueAmount` | number
`billingReason` | string
`isInvoiceGenerated` | boolean

## Example

```typescript
import type { AuthInvoicesGet200ResponseInvoicesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "createdAt": null,
  "status": null,
  "paid": null,
  "invoiceNumber": null,
  "totalAmount": null,
  "currency": null,
  "dueAmount": null,
  "billingReason": null,
  "isInvoiceGenerated": null,
} satisfies AuthInvoicesGet200ResponseInvoicesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthInvoicesGet200ResponseInvoicesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


