
# Module: contain

## Callable

▸ **contain**(`ref`: string, `values`: string | string[], `options?`: [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md)): *boolean*

Checks if the reference value contains the provided values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | string | The reference string, array, or object. |
`values` | string &#124; string[] | A single or array of values to find within `ref`. If `ref` is an object, `values` can be a key name, an array of key names, or an object with key-value pairs to compare.  |
`options?` | [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md) | - |

**Returns:** *boolean*

true if the value contains the provided values, otherwise false.

▸ **contain**(`ref`: any[], `values`: any, `options?`: [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | any[] |
`values` | any |
`options?` | [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md) |

**Returns:** *boolean*

▸ **contain**(`ref`: object, `values`: string | string[] | object, `options?`: [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | object |
`values` | string &#124; string[] &#124; object |
`options?` | [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md) |

**Returns:** *boolean*

## Index

### Interfaces

* [Options](../interfaces/_hoek_6_2_5_index_d_.contain.options.md)
