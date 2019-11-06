
# External module: "hoek/8.5.0/index.d"

## Index

### Modules

* [applyToDefaults](_hoek_8_5_0_index_d_.applytodefaults.md)
* [clone](_hoek_8_5_0_index_d_.clone.md)
* [contain](_hoek_8_5_0_index_d_.contain.md)
* [deepEqual](_hoek_8_5_0_index_d_.deepequal.md)
* [internals](_hoek_8_5_0_index_d_.internals.md)
* [intersect](_hoek_8_5_0_index_d_.intersect.md)
* [merge](_hoek_8_5_0_index_d_.merge.md)
* [reach](_hoek_8_5_0_index_d_.reach.md)
* [ts](_hoek_8_5_0_index_d_.ts.md)

### Classes

* [Bench](../classes/_hoek_8_5_0_index_d_.bench.md)

### Functions

* [assert](_hoek_8_5_0_index_d_.md#assert)
* [block](_hoek_8_5_0_index_d_.md#block)
* [escapeHeaderAttribute](_hoek_8_5_0_index_d_.md#escapeheaderattribute)
* [escapeHtml](_hoek_8_5_0_index_d_.md#escapehtml)
* [escapeJson](_hoek_8_5_0_index_d_.md#escapejson)
* [escapeRegex](_hoek_8_5_0_index_d_.md#escaperegex)
* [flatten](_hoek_8_5_0_index_d_.md#flatten)
* [ignore](_hoek_8_5_0_index_d_.md#ignore)
* [isPromise](_hoek_8_5_0_index_d_.md#ispromise)
* [once](_hoek_8_5_0_index_d_.md#once)
* [reachTemplate](_hoek_8_5_0_index_d_.md#reachtemplate)
* [stringify](_hoek_8_5_0_index_d_.md#stringify)
* [wait](_hoek_8_5_0_index_d_.md#wait)

## Functions

###  assert

▸ **assert**(`condition`: any, `error`: Error): *void*

Throw an error if condition is falsy.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | any | If `condition` is not truthy, an exception is thrown. |
`error` | Error | The error thrown if the condition fails.  |

**Returns:** *void*

Does not return a value but throws if the `condition` is falsy.

▸ **assert**(`condition`: any, ...`args`: any): *void*

Throw an error if condition is falsy.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | any | If `condition` is not truthy, an exception is thrown. |
`...args` | any | Any number of values, concatenated together (space separated) to create the error message.  |

**Returns:** *void*

Does not return a value but throws if the `condition` is falsy.

___

###  block

▸ **block**(): *Promise‹void›*

Returns a Promise that never resolves.

**Returns:** *Promise‹void›*

___

###  escapeHeaderAttribute

▸ **escapeHeaderAttribute**(`attribute`: string): *string*

Escape string for usage as an attribute value in HTTP headers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attribute` | string | The string to be escaped.  |

**Returns:** *string*

The escaped string. Will throw on invalid characters that are not supported to be escaped.

___

###  escapeHtml

▸ **escapeHtml**(`string`: string): *string*

Escape string for usage in HTML.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to be escaped.  |

**Returns:** *string*

The escaped string.

___

###  escapeJson

▸ **escapeJson**(`string`: string): *string*

Escape string for usage in JSON.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to be escaped.  |

**Returns:** *string*

The escaped string.

___

###  escapeRegex

▸ **escapeRegex**(`string`: string): *string*

Escape string for Regex construction by prefixing all reserved characters with a backslash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to be escaped.  |

**Returns:** *string*

The escaped string.

___

###  flatten

▸ **flatten**<**T**>(`array`: ArrayLike‹T | ReadonlyArray‹T››, `target?`: ArrayLike‹T | ReadonlyArray‹T››): *T[]*

Flatten an array with sub arrays

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ArrayLike‹T &#124; ReadonlyArray‹T›› | an array of items or other arrays to flatten. |
`target?` | ArrayLike‹T &#124; ReadonlyArray‹T›› | if provided, an array to shallow copy the flattened `array` items to  |

**Returns:** *T[]*

a flat array of the provided values (appended to `target` is provided).

___

###  ignore

▸ **ignore**(...`ignore`: any): *void*

A reusable no-op function.

**Parameters:**

Name | Type |
------ | ------ |
`...ignore` | any |

**Returns:** *void*

___

###  isPromise

▸ **isPromise**(`promise`: any): *boolean*

Determines if an object is a promise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`promise` | any | the object tested.  |

**Returns:** *boolean*

true if the object is a promise, otherwise false.

___

###  once

▸ **once**<**T**>(`method`: T): *T*

Wraps a function to ensure it can only execute once.

**Type parameters:**

▪ **T**: *Function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method` | T | The function to be wrapped.  |

**Returns:** *T*

The wrapped function.

___

###  reachTemplate

▸ **reachTemplate**(`obj`: object | null, `template`: string, `options?`: [Options](../interfaces/_hoek_8_5_0_index_d_.reach.options.md)): *string*

Replace string parameters (using format "{path.to.key}") with their corresponding object key values using `Hoek.reach()`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object &#124; null | the object from which to look up the value. |
`template` | string | the string containing {} enclosed key paths to be replaced.  |
`options?` | [Options](../interfaces/_hoek_8_5_0_index_d_.reach.options.md) | - |

**Returns:** *string*

The template string with the {} enclosed keys replaced with looked-up values.

___

###  stringify

▸ **stringify**(`value`: any, `replacer?`: any, `space?`: string | number): *string*

Converts a JavaScript value to a JavaScript Object Notation (JSON) string with protection against thrown errors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | A JavaScript value, usually an object or array, to be converted. |
`replacer?` | any | The JSON.stringify() `replacer` argument. |
`space?` | string &#124; number | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.  |

**Returns:** *string*

The JSON string. If the operation fails, an error string value is returned (no exception thrown).

___

###  wait

▸ **wait**(`timeout?`: number): *Promise‹void›*

Returns a Promise that resolves after the requested timeout.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeout?` | number | The number of milliseconds to wait before resolving the Promise.  |

**Returns:** *Promise‹void›*

A Promise.
