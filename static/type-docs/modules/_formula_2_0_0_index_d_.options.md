
# Module: Options

## Index

### Type aliases

* [Reference](_formula_2_0_0_index_d_.options.md#reference)

### Properties

* [constants](_formula_2_0_0_index_d_.options.md#optional-constants)
* [functions](_formula_2_0_0_index_d_.options.md#optional-functions)
* [reference](_formula_2_0_0_index_d_.options.md#optional-reference)
* [tokenRx](_formula_2_0_0_index_d_.options.md#optional-tokenrx)

## Type aliases

###  Reference

Ƭ **Reference**: *function*

#### Type declaration:

▸ (`name`: string): *function*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

▸ (`context`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`context` | any |

## Properties

### `Optional` constants

• **constants**? : *Record‹string, any›*

A hash of key - value pairs used to convert constants to values.

___

### `Optional` functions

• **functions**? : *Record‹string, Function›*

A hash of key-value pairs used to resolve formula functions.

___

### `Optional` reference

• **reference**? : *[Reference](_formula_2_0_0_index_d_.options.md#reference)*

A variable resolver factory function.

___

### `Optional` tokenRx

• **tokenRx**? : *RegExp*

A regular expression used to validate token variables.
