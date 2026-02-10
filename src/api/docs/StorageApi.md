# StorageApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStorageConfig**](StorageApi.md#createstorageconfigoperation) | **POST** /storage-config |  |
| [**deleteStorageConfig**](StorageApi.md#deletestorageconfig) | **DELETE** /storage-config/{storageKey} |  |
| [**getStorageConfig**](StorageApi.md#getstorageconfig) | **GET** /storage-config/{storageKey} |  |
| [**listStorageConfigs**](StorageApi.md#liststorageconfigs) | **GET** /storage-configs |  |
| [**updateStorageConfig**](StorageApi.md#updatestorageconfigoperation) | **PUT** /storage-config/{storageKey} |  |



## createStorageConfig

> Logout200Response createStorageConfig(createStorageConfigRequest)



Create a new storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { CreateStorageConfigOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // CreateStorageConfigRequest
    createStorageConfigRequest: ...,
  } satisfies CreateStorageConfigOperationRequest;

  try {
    const data = await api.createStorageConfig(body);
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
| **createStorageConfigRequest** | [CreateStorageConfigRequest](CreateStorageConfigRequest.md) |  | |

### Return type

[**Logout200Response**](Logout200Response.md)

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


## deleteStorageConfig

> Logout200Response deleteStorageConfig(storageKey)



Delete a storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { DeleteStorageConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
  } satisfies DeleteStorageConfigRequest;

  try {
    const data = await api.deleteStorageConfig(body);
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
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |

### Return type

[**Logout200Response**](Logout200Response.md)

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


## getStorageConfig

> GetStorageConfig200Response getStorageConfig(storageKey)



Get a storage configuration by key

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetStorageConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
  } satisfies GetStorageConfigRequest;

  try {
    const data = await api.getStorageConfig(body);
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
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |

### Return type

[**GetStorageConfig200Response**](GetStorageConfig200Response.md)

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


## listStorageConfigs

> ListStorageConfigs200Response listStorageConfigs()



List all storage configurations

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { ListStorageConfigsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  try {
    const data = await api.listStorageConfigs();
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

[**ListStorageConfigs200Response**](ListStorageConfigs200Response.md)

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


## updateStorageConfig

> Logout200Response updateStorageConfig(storageKey, updateStorageConfigRequest)



Update a storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { UpdateStorageConfigOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
    // UpdateStorageConfigRequest
    updateStorageConfigRequest: ...,
  } satisfies UpdateStorageConfigOperationRequest;

  try {
    const data = await api.updateStorageConfig(body);
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
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |
| **updateStorageConfigRequest** | [UpdateStorageConfigRequest](UpdateStorageConfigRequest.md) |  | |

### Return type

[**Logout200Response**](Logout200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

