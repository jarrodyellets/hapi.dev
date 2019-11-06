
# Class: Boom <**Data**>

An Error object used to return an HTTP response error (4xx, 5xx)

## Type parameters

▪ **Data**

## Hierarchy

* Error

  ↳ **Boom**

## Index

### Constructors

* [constructor](_boom_8_0_1_index_d_.boom.md#constructor)

### Properties

* [data](_boom_8_0_1_index_d_.boom.md#optional-data)
* [isBoom](_boom_8_0_1_index_d_.boom.md#isboom)
* [isServer](_boom_8_0_1_index_d_.boom.md#isserver)
* [message](_boom_8_0_1_index_d_.boom.md#message)
* [name](_boom_8_0_1_index_d_.boom.md#name)
* [output](_boom_8_0_1_index_d_.boom.md#output)
* [stack](_boom_8_0_1_index_d_.boom.md#optional-stack)
* [typeof](_boom_8_0_1_index_d_.boom.md#typeof)
* [Error](_boom_8_0_1_index_d_.boom.md#static-error)

### Methods

* [reformat](_boom_8_0_1_index_d_.boom.md#reformat)

## Constructors

###  constructor

\+ **new Boom**(`message?`: string | Error, `options?`: [Options](../interfaces/_boom_8_0_1_index_d_.options.md)‹Data›): *[Boom](_boom_8_0_1_index_d_.boom.md)*

Creates a new Boom object using the provided message

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string &#124; Error |
`options?` | [Options](../interfaces/_boom_8_0_1_index_d_.options.md)‹Data› |

**Returns:** *[Boom](_boom_8_0_1_index_d_.boom.md)*

## Properties

### `Optional` data

• **data**? : *Data*

Custom error data with additional information specific to the error type

___

###  isBoom

• **isBoom**: *boolean*

isBoom - if true, indicates this is a Boom object instance.

___

###  isServer

• **isServer**: *boolean*

Convenience boolean indicating status code >= 500

___

###  message

• **message**: *string*

*Overrides void*

The error message

___

###  name

• **name**: *string*

*Inherited from void*

___

###  output

• **output**: *[Output](../interfaces/_boom_8_0_1_index_d_.output.md)*

The formatted response

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

___

###  typeof

• **typeof**: *Function*

The constructor used to create the error

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

## Methods

###  reformat

▸ **reformat**(`debug?`: boolean): *string*

Specifies if an error object is a valid boom object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`debug?` | boolean | A boolean that, when true, does not hide the original 500 error message. Defaults to false.  |

**Returns:** *string*
