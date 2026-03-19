
# McpServerInfoGet200Response


## Properties

Name | Type
------------ | -------------
`protocolVersion` | string
`serverName` | string
`serverVersion` | string
`capabilities` | [McpServerInfoGet200ResponseCapabilities](McpServerInfoGet200ResponseCapabilities.md)

## Example

```typescript
import type { McpServerInfoGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "protocolVersion": null,
  "serverName": null,
  "serverVersion": null,
  "capabilities": null,
} satisfies McpServerInfoGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerInfoGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


