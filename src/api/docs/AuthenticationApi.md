# AuthenticationApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authCheckoutPost**](AuthenticationApi.md#authcheckoutpost) | **POST** /auth/checkout |  |
| [**authInvoicesGet**](AuthenticationApi.md#authinvoicesget) | **GET** /auth/invoices |  |
| [**authInvoicesInvoiceIdGet**](AuthenticationApi.md#authinvoicesinvoiceidget) | **GET** /auth/invoices/{invoiceId} |  |
| [**authOnboardingStepPut**](AuthenticationApi.md#authonboardingstepputoperation) | **PUT** /auth/onboarding-step |  |
| [**getBillingPortal**](AuthenticationApi.md#getbillingportal) | **GET** /auth/billing |  |
| [**getCredits**](AuthenticationApi.md#getcredits) | **GET** /auth/credits |  |
| [**getMe**](AuthenticationApi.md#getme) | **GET** /auth/me |  |
| [**getRecentActivity**](AuthenticationApi.md#getrecentactivity) | **GET** /me/recent-activity |  |
| [**githubCallback**](AuthenticationApi.md#githubcallback) | **GET** /auth/github/callback |  |
| [**logout**](AuthenticationApi.md#logout) | **POST** /auth/logout |  |



## authCheckoutPost

> AuthCheckoutPost200Response authCheckoutPost()



Create a Polar checkout session URL for subscription

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthCheckoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.authCheckoutPost();
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

[**AuthCheckoutPost200Response**](AuthCheckoutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authInvoicesGet

> AuthInvoicesGet200Response authInvoicesGet(page, limit)



List previous invoices from Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthInvoicesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // number | Page number, defaults to 1 (optional)
    page: 8.14,
    // number | Page size, defaults to 10, max 100 (optional)
    limit: 8.14,
  } satisfies AuthInvoicesGetRequest;

  try {
    const data = await api.authInvoicesGet(body);
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
| **page** | `number` | Page number, defaults to 1 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size, defaults to 10, max 100 | [Optional] [Defaults to `undefined`] |

### Return type

[**AuthInvoicesGet200Response**](AuthInvoicesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authInvoicesInvoiceIdGet

> AuthInvoicesInvoiceIdGet200Response authInvoicesInvoiceIdGet(invoiceId)



Get a specific invoice URL from Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthInvoicesInvoiceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // string | Order/Invoice ID
    invoiceId: invoiceId_example,
  } satisfies AuthInvoicesInvoiceIdGetRequest;

  try {
    const data = await api.authInvoicesInvoiceIdGet(body);
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
| **invoiceId** | `string` | Order/Invoice ID | [Defaults to `undefined`] |

### Return type

[**AuthInvoicesInvoiceIdGet200Response**](AuthInvoicesInvoiceIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authOnboardingStepPut

> Logout200Response authOnboardingStepPut(authOnboardingStepPutRequest)



Update the onboarding step for the authenticated user

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthOnboardingStepPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // AuthOnboardingStepPutRequest
    authOnboardingStepPutRequest: ...,
  } satisfies AuthOnboardingStepPutOperationRequest;

  try {
    const data = await api.authOnboardingStepPut(body);
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
| **authOnboardingStepPutRequest** | [AuthOnboardingStepPutRequest](AuthOnboardingStepPutRequest.md) |  | |

### Return type

[**Logout200Response**](Logout200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBillingPortal

> GetBillingPortal200Response getBillingPortal(userId)



Get customer portal URL for managing payment details in Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { GetBillingPortalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | User ID to get billing portal for
    userId: userId_example,
  } satisfies GetBillingPortalRequest;

  try {
    const data = await api.getBillingPortal(body);
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
| **userId** | `string` | User ID to get billing portal for | [Defaults to `undefined`] |

### Return type

[**GetBillingPortal200Response**](GetBillingPortal200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |
| **404** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCredits

> GetCredits200Response getCredits()



Get user credit usage and subscription status

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { GetCreditsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.getCredits();
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

[**GetCredits200Response**](GetCredits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMe

> GetMe200Response getMe()



Get current authenticated user information with billing status

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { GetMeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.getMe();
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

[**GetMe200Response**](GetMe200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRecentActivity

> GetRecentActivity200Response getRecentActivity()



Get user statistics and recent activity

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { GetRecentActivityRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.getRecentActivity();
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

[**GetRecentActivity200Response**](GetRecentActivity200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## githubCallback

> GithubCallback200Response githubCallback(code, state, error, errorDescription)



GitHub OAuth callback endpoint

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { GithubCallbackRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | Authorization code from GitHub (optional)
    code: code_example,
    // string | CSRF protection state parameter (optional)
    state: state_example,
    // string | Error from GitHub OAuth (optional)
    error: error_example,
    // string | Error description from GitHub (optional)
    errorDescription: errorDescription_example,
  } satisfies GithubCallbackRequest;

  try {
    const data = await api.githubCallback(body);
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
| **code** | `string` | Authorization code from GitHub | [Optional] [Defaults to `undefined`] |
| **state** | `string` | CSRF protection state parameter | [Optional] [Defaults to `undefined`] |
| **error** | `string` | Error from GitHub OAuth | [Optional] [Defaults to `undefined`] |
| **errorDescription** | `string` | Error description from GitHub | [Optional] [Defaults to `undefined`] |

### Return type

[**GithubCallback200Response**](GithubCallback200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## logout

> Logout200Response logout()



Logout and clear authentication cookie

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { LogoutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.logout();
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

[**Logout200Response**](Logout200Response.md)

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

