# DocumentsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateDocument**](DocumentsApi.md#generatedocumentoperation) | **POST** /generate |  |
| [**getGenerationStats**](DocumentsApi.md#getgenerationstats) | **GET** /documents/generation-stats |  |
| [**getUsageStats**](DocumentsApi.md#getusagestats) | **GET** /documents/usage-stats |  |
| [**listGenerationRecords**](DocumentsApi.md#listgenerationrecords) | **GET** /documents/records |  |



## generateDocument

> GenerateDocument200Response generateDocument(generateDocumentRequest)



Generate a PDF document from a template

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { GenerateDocumentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // GenerateDocumentRequest (optional)
    generateDocumentRequest: ...,
  } satisfies GenerateDocumentOperationRequest;

  try {
    const data = await api.generateDocument(body);
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
| **generateDocumentRequest** | [GenerateDocumentRequest](GenerateDocumentRequest.md) |  | [Optional] |

### Return type

[**GenerateDocument200Response**](GenerateDocument200Response.md)

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
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGenerationStats

> GetGenerationStats200Response getGenerationStats()



Get overall generation statistics (total PDFs, success rate, failures)

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { GetGenerationStatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  try {
    const data = await api.getGenerationStats();
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

[**GetGenerationStats200Response**](GetGenerationStats200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsageStats

> GetUsageStats200Response getUsageStats()



Get document generation usage statistics for the last 7 days

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { GetUsageStatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  try {
    const data = await api.getUsageStats();
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

[**GetUsageStats200Response**](GetUsageStats200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGenerationRecords

> ListGenerationRecords200Response listGenerationRecords(page, limit)



List generation records for the authenticated user

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { ListGenerationRecordsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // number | Page number (1-indexed) (optional)
    page: 56,
    // number | Number of records per page (max 100) (optional)
    limit: 56,
  } satisfies ListGenerationRecordsRequest;

  try {
    const data = await api.listGenerationRecords(body);
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
| **page** | `number` | Page number (1-indexed) | [Optional] [Defaults to `1`] |
| **limit** | `number` | Number of records per page (max 100) | [Optional] [Defaults to `10`] |

### Return type

[**ListGenerationRecords200Response**](ListGenerationRecords200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

