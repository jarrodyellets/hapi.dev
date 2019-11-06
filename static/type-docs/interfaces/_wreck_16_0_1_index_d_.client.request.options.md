
# Interface: Options

## Hierarchy

* **Options**

  ↳ [Options](_wreck_16_0_1_index_d_.client.options.md)

## Index

### Properties

* [agent](_wreck_16_0_1_index_d_.client.request.options.md#optional-agent)
* [baseUrl](_wreck_16_0_1_index_d_.client.request.options.md#optional-baseurl)
* [beforeRedirect](_wreck_16_0_1_index_d_.client.request.options.md#optional-beforeredirect)
* [ciphers](_wreck_16_0_1_index_d_.client.request.options.md#optional-ciphers)
* [gunzip](_wreck_16_0_1_index_d_.client.request.options.md#optional-gunzip)
* [headers](_wreck_16_0_1_index_d_.client.request.options.md#optional-headers)
* [payload](_wreck_16_0_1_index_d_.client.request.options.md#optional-payload)
* [redirect303](_wreck_16_0_1_index_d_.client.request.options.md#optional-redirect303)
* [redirectMethod](_wreck_16_0_1_index_d_.client.request.options.md#optional-redirectmethod)
* [redirected](_wreck_16_0_1_index_d_.client.request.options.md#optional-redirected)
* [redirects](_wreck_16_0_1_index_d_.client.request.options.md#optional-redirects)
* [rejectUnauthorized](_wreck_16_0_1_index_d_.client.request.options.md#optional-rejectunauthorized)
* [secureProtocol](_wreck_16_0_1_index_d_.client.request.options.md#optional-secureprotocol)
* [socketPath](_wreck_16_0_1_index_d_.client.request.options.md#optional-socketpath)
* [timeout](_wreck_16_0_1_index_d_.client.request.options.md#optional-timeout)

## Properties

### `Optional` agent

• **agent**? : *Agent | Agent | false*

Node HTTP or HTTPS Agent object (false disables agent pooling).

___

### `Optional` baseUrl

• **baseUrl**? : *string*

Fully qualified URL string used as the base URL.

___

### `Optional` beforeRedirect

• **beforeRedirect**? : *function*

A function to call before a redirect is triggered.

**`param`** a string specifying the redirect method.

**`param`** HTTP status code of the response that triggered the redirect.

**`param`** The redirect location string.

**`param`** An object with the headers received as part of the redirection response.

**`param`** Options that will be applied to the redirect request. Changes to this object are applied to the redirection request.

**`param`** the callback function called to perform the redirection.

#### Type declaration:

▸ (`redirectMethod`: string, `statusCode`: number, `location`: string, `resHeaders`: Record‹string, string›, `redirectOptions`: [Options](_wreck_16_0_1_index_d_.client.request.options.md), `next`: function): *void*

**Parameters:**

▪ **redirectMethod**: *string*

▪ **statusCode**: *number*

▪ **location**: *string*

▪ **resHeaders**: *Record‹string, string›*

▪ **redirectOptions**: *[Options](_wreck_16_0_1_index_d_.client.request.options.md)*

▪ **next**: *function*

▸ (): *void*

___

### `Optional` ciphers

• **ciphers**? : *string*

TLS list of TLS ciphers to override node's default.

___

### `Optional` gunzip

• **gunzip**? : *boolean | "force"*

Determines how to handle gzipped payloads.

**`default`** false

___

### `Optional` headers

• **headers**? : *Record‹string, string›*

An object containing the request headers.

___

### `Optional` payload

• **payload**? : *[Payload](../modules/_wreck_16_0_1_index_d_.client.request.md#payload)*

The request body as a string, Buffer, readable stream, or an object that can be serialized using `JSON.stringify()`.

___

### `Optional` redirect303

• **redirect303**? : *boolean*

Enables redirects on 303 responses (using GET).

**`default`** false

___

### `Optional` redirectMethod

• **redirectMethod**? : *string*

Overrides the HTTP method used when following 301 and 302 redirections. Defaults to the original method.

___

### `Optional` redirected

• **redirected**? : *function*

A function to call when a redirect was triggered.

**`param`** HTTP status code of the response that triggered the redirect.

**`param`** the redirected location string.

**`param`** the new ClientRequest object which replaces the one initially returned.

#### Type declaration:

▸ (`statusCode`: number, `location`: string, `req`: ClientRequest): *void*

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`location` | string |
`req` | ClientRequest |

___

### `Optional` redirects

• **redirects**? : *number | false*

The maximum number of redirects to follow.

**`default`** false

___

### `Optional` rejectUnauthorized

• **rejectUnauthorized**? : *boolean*

TLS flag indicating whether the client should reject a response from a server with invalid certificates.

___

### `Optional` secureProtocol

• **secureProtocol**? : *string*

TLS flag indicating the SSL method to use, e.g. `SSLv3_method` to force SSL version 3.

___

### `Optional` socketPath

• **socketPath**? : *string*

A UNIX socket path string for direct server connection.

___

### `Optional` timeout

• **timeout**? : *number*

Number of milliseconds to wait without receiving a response before aborting the request.

**`default`** 0
