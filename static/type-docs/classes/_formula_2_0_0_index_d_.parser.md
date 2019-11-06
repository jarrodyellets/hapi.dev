
# Class: Parser <**T**>

Formula parser

## Type parameters

▪ **T**: *string | number*

## Hierarchy

* **Parser**

## Index

### Constructors

* [constructor](_formula_2_0_0_index_d_.parser.md#constructor)

### Methods

* [evaluate](_formula_2_0_0_index_d_.parser.md#evaluate)

## Constructors

###  constructor

\+ **new Parser**(`formula`: string, `options?`: [Options](../modules/_formula_2_0_0_index_d_.options.md)): *[Parser](_formula_2_0_0_index_d_.parser.md)*

Create a new formula parser.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`formula` | string | the formula string to parse. |
`options?` | [Options](../modules/_formula_2_0_0_index_d_.options.md) | optional settings.  |

**Returns:** *[Parser](_formula_2_0_0_index_d_.parser.md)*

## Methods

###  evaluate

▸ **evaluate**(`context?`: any): *T*

Evaluate the formula.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context?` | any | optional object with runtime formula context used to resolve variables.  |

**Returns:** *T*

the string or number outcome of the resolved formula.
