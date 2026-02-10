# WebhooksApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webhooksPolarPost**](WebhooksApi.md#webhookspolarpostoperation) | **POST** /webhooks/polar |  |



## webhooksPolarPost

> webhooksPolarPost(webhooksPolarPostRequest)



Handle Polar webhook events

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '';
import type { WebhooksPolarPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WebhooksApi();

  const body = {
    // WebhooksPolarPostRequest (optional)
    webhooksPolarPostRequest: ...,
  } satisfies WebhooksPolarPostOperationRequest;

  try {
    const data = await api.webhooksPolarPost(body);
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
| **webhooksPolarPostRequest** | [WebhooksPolarPostRequest](WebhooksPolarPostRequest.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

