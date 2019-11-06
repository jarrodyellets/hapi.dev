
# Module: reach

## Callable

▸ **reach**(`obj`: object | null, `chain`: string | string | number[] | false | null | undefined, `options?`: [Options](../interfaces/_hoek_8_5_0_index_d_.reach.options.md)): *any*

Convert an object key chain string to reference.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object &#124; null | the object from which to look up the value. |
`chain` | string &#124; string &#124; number[] &#124; false &#124; null &#124; undefined | the string path of the requested value. The chain string is split into key names using `options.separator`, or an array containing each individual key name. A chain including negative numbers will work like a negative index on an array.  |
`options?` | [Options](../interfaces/_hoek_8_5_0_index_d_.reach.options.md) | - |

**Returns:** *any*

The value referenced by the chain if found, otherwise undefined. If chain is null, undefined, or false, the object itself will be returned.

## Index

### Interfaces

* [Options](../interfaces/_hoek_8_5_0_index_d_.reach.options.md)
