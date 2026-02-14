# TemplatesApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTemplate**](TemplatesApi.md#createtemplateoperation) | **POST** /templates |  |
| [**deleteTemplate**](TemplatesApi.md#deletetemplate) | **DELETE** /templates/{templateId} |  |
| [**generateTemplateFromPdf**](TemplatesApi.md#generatetemplatefrompdf) | **POST** /templates/generate-from-pdf |  |
| [**generateTemplateFromPrompt**](TemplatesApi.md#generatetemplatefrompromptoperation) | **POST** /templates/generate-from-prompt |  |
| [**getTemplate**](TemplatesApi.md#gettemplate) | **GET** /templates/{templateId} |  |
| [**listTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates |  |
| [**updateTemplate**](TemplatesApi.md#updatetemplateoperation) | **PUT** /templates/{templateId} |  |



## createTemplate

> CreateTemplate200Response createTemplate(createTemplateRequest)



Create a new HTML template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { CreateTemplateOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // CreateTemplateRequest
    createTemplateRequest: ...,
  } satisfies CreateTemplateOperationRequest;

  try {
    const data = await api.createTemplate(body);
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
| **createTemplateRequest** | [CreateTemplateRequest](CreateTemplateRequest.md) |  | |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTemplate

> CreateTemplate200Response deleteTemplate(templateId)



Delete a template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { DeleteTemplateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
  } satisfies DeleteTemplateRequest;

  try {
    const data = await api.deleteTemplate(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateTemplateFromPdf

> CreateTemplate200Response generateTemplateFromPdf(file)



Generate HTML template from PDF file using AI. Upload a PDF file using multipart/form-data with field name \&quot;file\&quot;. The generated template will be automatically saved to the database.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { GenerateTemplateFromPdfRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // Blob | PDF file to convert to HTML template
    file: BINARY_DATA_HERE,
  } satisfies GenerateTemplateFromPdfRequest;

  try {
    const data = await api.generateTemplateFromPdf(body);
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
| **file** | `Blob` | PDF file to convert to HTML template | [Defaults to `undefined`] |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateTemplateFromPrompt

> CreateTemplate200Response generateTemplateFromPrompt(generateTemplateFromPromptRequest)



Generate HTML template from AI prompt. Provide a description of the template you want and the data fields to inject.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { GenerateTemplateFromPromptOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // GenerateTemplateFromPromptRequest
    generateTemplateFromPromptRequest: ...,
  } satisfies GenerateTemplateFromPromptOperationRequest;

  try {
    const data = await api.generateTemplateFromPrompt(body);
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
| **generateTemplateFromPromptRequest** | [GenerateTemplateFromPromptRequest](GenerateTemplateFromPromptRequest.md) |  | |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplate

> CreateTemplate200Response getTemplate(templateId)



Get a template by ID

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { GetTemplateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
  } satisfies GetTemplateRequest;

  try {
    const data = await api.getTemplate(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTemplates

> ListTemplates200Response listTemplates()



List all templates for authenticated user

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { ListTemplatesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  try {
    const data = await api.listTemplates();
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

[**ListTemplates200Response**](ListTemplates200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTemplate

> CreateTemplate200Response updateTemplate(templateId, updateTemplateRequest)



Update a template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { UpdateTemplateOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
    // UpdateTemplateRequest (optional)
    updateTemplateRequest: ...,
  } satisfies UpdateTemplateOperationRequest;

  try {
    const data = await api.updateTemplate(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |
| **updateTemplateRequest** | [UpdateTemplateRequest](UpdateTemplateRequest.md) |  | [Optional] |

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

