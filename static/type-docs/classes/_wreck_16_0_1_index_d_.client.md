
# Class: Client

An HTTP request client.

## Hierarchy

* **Client**

## Index

### Modules

* [parseCacheControl](../modules/_wreck_16_0_1_index_d_.client.parsecachecontrol.md)
* [read](../modules/_wreck_16_0_1_index_d_.client.read.md)
* [request](../modules/_wreck_16_0_1_index_d_.client.request.md)
* [toReadableStream](../modules/_wreck_16_0_1_index_d_.client.toreadablestream.md)

### Classes

* [Events](_wreck_16_0_1_index_d_.client.events.md)

### Interfaces

* [Agents](../interfaces/_wreck_16_0_1_index_d_.client.agents.md)
* [Options](../interfaces/_wreck_16_0_1_index_d_.client.options.md)

### Constructors

* [constructor](_wreck_16_0_1_index_d_.client.md#constructor)

### Properties

* [agents](_wreck_16_0_1_index_d_.client.md#agents)
* [events](_wreck_16_0_1_index_d_.client.md#optional-events)

### Methods

* [defaults](_wreck_16_0_1_index_d_.client.md#defaults)
* [delete](_wreck_16_0_1_index_d_.client.md#delete)
* [get](_wreck_16_0_1_index_d_.client.md#get)
* [patch](_wreck_16_0_1_index_d_.client.md#patch)
* [post](_wreck_16_0_1_index_d_.client.md#post)
* [put](_wreck_16_0_1_index_d_.client.md#put)

## Constructors

###  constructor

\+ **new Client**(`options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.options.md)): *[Client](_wreck_16_0_1_index_d_.client.md)*

Creates a new client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.options.md) | the client default options.  |

**Returns:** *[Client](_wreck_16_0_1_index_d_.client.md)*

## Properties

###  agents

• **agents**: *[Agents](../interfaces/_wreck_16_0_1_index_d_.client.agents.md)*

An object containing the node agents used for pooling connections for `http` and `https`.

___

### `Optional` events

• **events**? : *[Events](_wreck_16_0_1_index_d_.client.events.md)*

An event emitter used to deliver events when the `events` option is set.

## Methods

###  defaults

▸ **defaults**(`options`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.options.md)): *[Client](_wreck_16_0_1_index_d_.client.md)*

Creates a new client using the current client options as defaults and the provided options as override.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.options.md) | the client override options.  |

**Returns:** *[Client](_wreck_16_0_1_index_d_.client.md)*

a new client.

___

###  delete

▸ **delete**<**T**>(`uri`: string, `options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md)): *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

Performs an HTTP DELETE request.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | the resource URI. |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md) | default options override.  |

**Returns:** *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

the received payload Buffer or parsed payload based on the options.

___

###  get

▸ **get**<**T**>(`uri`: string, `options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md)): *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

Performs an HTTP GET request.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | the resource URI. |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md) | default options override.  |

**Returns:** *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

the received payload Buffer or parsed payload based on the options.

___

###  patch

▸ **patch**<**T**>(`uri`: string, `options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md)): *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

Performs an HTTP PATCH request.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | the resource URI. |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md) | default options override.  |

**Returns:** *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

the received payload Buffer or parsed payload based on the options.

___

###  post

▸ **post**<**T**>(`uri`: string, `options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md)): *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

Performs an HTTP POST request.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | the resource URI. |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md) | default options override.  |

**Returns:** *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

the received payload Buffer or parsed payload based on the options.

___

###  put

▸ **put**<**T**>(`uri`: string, `options?`: [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md)): *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

Performs an HTTP PUT request.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | the resource URI. |
`options?` | [Options](../interfaces/_wreck_16_0_1_index_d_.client.request.options.md) & [Options](../interfaces/_wreck_16_0_1_index_d_.client.read.options.md) | default options override.  |

**Returns:** *Promise‹[Response](../interfaces/_wreck_16_0_1_index_d_.client.request.response.md)‹T››*

the received payload Buffer or parsed payload based on the options.
