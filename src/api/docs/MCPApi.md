# MCPApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpResourcesListPost**](MCPApi.md#mcpresourceslistpost) | **POST** /mcp/resources/list | List available MCP resources |
| [**mcpResourcesReadPost**](MCPApi.md#mcpresourcesreadpostoperation) | **POST** /mcp/resources/read | Read an MCP resource |
| [**mcpServerInfoGet**](MCPApi.md#mcpserverinfoget) | **GET** /mcp/server-info | Get MCP server information |
| [**mcpToolsCallPost**](MCPApi.md#mcptoolscallpostoperation) | **POST** /mcp/tools/call | Call an MCP tool |
| [**mcpToolsListPost**](MCPApi.md#mcptoolslistpost) | **POST** /mcp/tools/list | List available MCP tools |
| [**mcpWellKnownMcpJsonGet**](MCPApi.md#mcpwellknownmcpjsonget) | **GET** /mcp/.well-known/mcp.json | MCP discovery endpoint |



## mcpResourcesListPost

> string mcpResourcesListPost()

List available MCP resources

Returns all templates as MCP resources that can be read. Response is in Server-Sent Events format.

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpResourcesListPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
  });
  const api = new MCPApi(config);

  try {
    const data = await api.mcpResourcesListPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE stream with resources data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpResourcesReadPost

> string mcpResourcesReadPost(mcpResourcesReadPostRequest)

Read an MCP resource

Get the HTML content of a specific template by its URI (template://templateId). Response is in Server-Sent Events format.

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpResourcesReadPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
  });
  const api = new MCPApi(config);

  const body = {
    // McpResourcesReadPostRequest
    mcpResourcesReadPostRequest: ...,
  } satisfies McpResourcesReadPostOperationRequest;

  try {
    const data = await api.mcpResourcesReadPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mcpResourcesReadPostRequest** | [McpResourcesReadPostRequest](McpResourcesReadPostRequest.md) |  | |

### Return type

**string**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE stream with resource content |  -  |
| **404** | SSE stream with error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServerInfoGet

> McpServerInfoGet200Response mcpServerInfoGet()

Get MCP server information

Returns MCP protocol version and server capabilities

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpServerInfoGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MCPApi();

  try {
    const data = await api.mcpServerInfoGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**McpServerInfoGet200Response**](McpServerInfoGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpToolsCallPost

> string mcpToolsCallPost(mcpToolsCallPostRequest)

Call an MCP tool

Execute a tool like generate_pdf, list_templates, get_template_details, or get_user_credits. Response is in Server-Sent Events format.

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpToolsCallPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
  });
  const api = new MCPApi(config);

  const body = {
    // McpToolsCallPostRequest
    mcpToolsCallPostRequest: ...,
  } satisfies McpToolsCallPostOperationRequest;

  try {
    const data = await api.mcpToolsCallPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mcpToolsCallPostRequest** | [McpToolsCallPostRequest](McpToolsCallPostRequest.md) |  | |

### Return type

**string**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE stream with tool execution result |  -  |
| **400** | SSE stream with error |  -  |
| **403** | SSE stream with error |  -  |
| **404** | SSE stream with error |  -  |
| **500** | SSE stream with error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpToolsListPost

> string mcpToolsListPost()

List available MCP tools

Returns all tools available for AI assistants to use (generate_pdf, list_templates, etc.). Response is in Server-Sent Events format.

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpToolsListPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
  });
  const api = new MCPApi(config);

  try {
    const data = await api.mcpToolsListPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE stream with tools data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpWellKnownMcpJsonGet

> McpWellKnownMcpJsonGet200Response mcpWellKnownMcpJsonGet()

MCP discovery endpoint

Returns MCP server configuration for ChatGPT and other AI assistants

### Example

```ts
import {
  Configuration,
  MCPApi,
} from '';
import type { McpWellKnownMcpJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MCPApi();

  try {
    const data = await api.mcpWellKnownMcpJsonGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**McpWellKnownMcpJsonGet200Response**](McpWellKnownMcpJsonGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

