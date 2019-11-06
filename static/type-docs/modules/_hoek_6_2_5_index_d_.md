
# External module: "hoek/6.2.5/index.d"

## Index

### Modules

* [clone](_hoek_6_2_5_index_d_.clone.md)
* [contain](_hoek_6_2_5_index_d_.contain.md)
* [deepEqual](_hoek_6_2_5_index_d_.deepequal.md)
* [intersect](_hoek_6_2_5_index_d_.intersect.md)
* [reach](_hoek_6_2_5_index_d_.reach.md)

### Classes

* [Bench](../classes/_hoek_6_2_5_index_d_.bench.md)

### Functions

* [applyToDefaults](_hoek_6_2_5_index_d_.md#applytodefaults)
* [applyToDefaultsWithShallow](_hoek_6_2_5_index_d_.md#applytodefaultswithshallow)
* [assert](_hoek_6_2_5_index_d_.md#assert)
* [block](_hoek_6_2_5_index_d_.md#block)
* [cloneWithShallow](_hoek_6_2_5_index_d_.md#clonewithshallow)
* [escapeHeaderAttribute](_hoek_6_2_5_index_d_.md#escapeheaderattribute)
* [escapeHtml](_hoek_6_2_5_index_d_.md#escapehtml)
* [escapeJson](_hoek_6_2_5_index_d_.md#escapejson)
* [escapeRegex](_hoek_6_2_5_index_d_.md#escaperegex)
* [flatten](_hoek_6_2_5_index_d_.md#flatten)
* [ignore](_hoek_6_2_5_index_d_.md#ignore)
* [merge](_hoek_6_2_5_index_d_.md#merge)
* [once](_hoek_6_2_5_index_d_.md#once)
* [reachTemplate](_hoek_6_2_5_index_d_.md#reachtemplate)
* [stringify](_hoek_6_2_5_index_d_.md#stringify)
* [uniqueFilename](_hoek_6_2_5_index_d_.md#uniquefilename)
* [wait](_hoek_6_2_5_index_d_.md#wait)

## Functions

###  applyToDefaults

▸ **applyToDefaults**<**T**>(`defaults`: Partial‹T›, `options`: Partial‹T› | boolean | null, `isNullOverride?`: boolean): *Partial‹T›*

Apply options to a copy of the defaults.

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaults` | Partial‹T› | An object with the default values to use of `options` does not contain the same keys. |
`options` | Partial‹T› &#124; boolean &#124; null | The options used to override the `defaults`. |
`isNullOverride?` | boolean | When true, null value from `options` overrides existing value in `defaults`. Defaults to false.  |

**Returns:** *Partial‹T›*

A copy of `defaults` with `options` keys overriding any conflicts.

___

###  applyToDefaultsWithShallow

▸ **applyToDefaultsWithShallow**<**T**>(`defaults`: Partial‹T›, `options`: Partial‹T› | boolean | null, `keys`: string[]): *Partial‹T›*

Apply options to a copy of the defaults with specific keys shallowly cloned.

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaults` | Partial‹T› | An object with the default values to use of `options` does not contain the same keys. |
`options` | Partial‹T› &#124; boolean &#124; null | The options used to override the `defaults`. |
`keys` | string[] | An array of string keys indicating which `options` properties to shallow copy instead of deep clone. Use dot-notation to indicate nested keys (e.g. "a.b").  |

**Returns:** *Partial‹T›*

A copy of `defaults` with `options` keys overriding any conflicts.

___

###  assert

▸ **assert**(`condition`: any, `error`: Error): *void*

Throw an error if condition is falsey.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | any | If `condition` is not truthy, an exception is thrown. |
`error` | Error | The error thrown if the condition fails.  |

**Returns:** *void*

Does not return a value but throws if the `condition` is falsey.

▸ **assert**(`condition`: any, ...`args`: any): *void*

Throw an error if condition is falsey.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | any | If `condition` is not truthy, an exception is thrown. |
`...args` | any | Any number of values, concatenated together (space separated) to create the error message.  |

**Returns:** *void*

Does not return a value but throws if the `condition` is falsey.

___

###  block

▸ **block**(): *Promise‹void›*

Returns a Promise that never resolves.

**Returns:** *Promise‹void›*

___

###  cloneWithShallow

▸ **cloneWithShallow**<**T**>(`obj`: T, `keys`: string[], `options?`: [Options](../interfaces/_hoek_6_2_5_index_d_.clone.options.md)): *T*

Clone an object or array with specific keys shallowly cloned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object being cloned. |
`keys` | string[] | An array of string keys indicating which `obj` properties to shallow copy instead of deep clone. Use dot-notation to indicate nested keys (e.g. "a.b").  |
`options?` | [Options](../interfaces/_hoek_6_2_5_index_d_.clone.options.md) | - |

**Returns:** *T*

A deep clone of `obj` with the requested `keys` shallowly cloned.

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

###  merge

▸ **merge**<**T1**, **T2**>(`target`: T1, `source`: T2, `isNullOverride?`: boolean, `isMergeArrays?`: boolean): *T1 & T2*

Merge all the properties of source into target.

**Type parameters:**

▪ **T1**: *object*

▪ **T2**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | T1 | The object being modified. |
`source` | T2 | The object used to copy properties from. |
`isNullOverride?` | boolean | When true, null value from `source` overrides existing value in `target`. Defaults to true. |
`isMergeArrays?` | boolean | When true, array value from `source` is merged with the existing value in `target`. Defaults to true.  |

**Returns:** *T1 & T2*

The `target` object.

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

▸ **reachTemplate**(`obj`: object | null, `template`: string, `options?`: [Options](../interfaces/_hoek_6_2_5_index_d_.reach.options.md)): *string*

Replace string parameters (using format "{path.to.key}") with their corresponding object key values using `Hoek.reach()`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object &#124; null | the object from which to look up the value. |
`template` | string | the string containing {} enclosed key paths to be replaced.  |
`options?` | [Options](../interfaces/_hoek_6_2_5_index_d_.reach.options.md) | - |

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

###  uniqueFilename

▸ **uniqueFilename**(`path`: string, `extension?`: string): *string*

Generate a random file name within a given path and optional extension.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | The file path within to generate a temporary file. |
`extension?` | string | File extension.  |

**Returns:** *string*

The generarted filename.

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
