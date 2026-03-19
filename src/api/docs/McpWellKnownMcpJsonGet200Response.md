
# McpWellKnownMcpJsonGet200Response


## Properties

Name | Type
------------ | -------------
`mcpVersion` | string
`serverInfo` | [McpWellKnownMcpJsonGet200ResponseServerInfo](McpWellKnownMcpJsonGet200ResponseServerInfo.md)
`capabilities` | [McpWellKnownMcpJsonGet200ResponseCapabilities](McpWellKnownMcpJsonGet200ResponseCapabilities.md)
`endpoints` | [McpWellKnownMcpJsonGet200ResponseEndpoints](McpWellKnownMcpJsonGet200ResponseEndpoints.md)
`authentication` | [McpWellKnownMcpJsonGet200ResponseAuthentication](McpWellKnownMcpJsonGet200ResponseAuthentication.md)

## Example

```typescript
import type { McpWellKnownMcpJsonGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "mcpVersion": null,
  "serverInfo": null,
  "capabilities": null,
  "endpoints": null,
  "authentication": null,
} satisfies McpWellKnownMcpJsonGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpWellKnownMcpJsonGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


