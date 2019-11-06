
# Interface: Options <**Data**>

## Type parameters

▪ **Data**

## Hierarchy

* **Options**

## Index

### Properties

* [ctor](_boom_8_0_1_index_d_.options.md#optional-ctor)
* [data](_boom_8_0_1_index_d_.options.md#optional-data)
* [message](_boom_8_0_1_index_d_.options.md#optional-message)
* [override](_boom_8_0_1_index_d_.options.md#optional-override)
* [statusCode](_boom_8_0_1_index_d_.options.md#optional-statuscode)

## Properties

### `Optional` ctor

• **ctor**? : *Function*

Constructor reference used to crop the exception call stack output

___

### `Optional` data

• **data**? : *Data*

Additional error information

___

### `Optional` message

• **message**? : *string*

Error message string

**`default`** none

___

### `Optional` override

• **override**? : *boolean*

If false, the err provided is a Boom object, and a statusCode or message are provided, the values are ignored

**`default`** true

___

### `Optional` statusCode

• **statusCode**? : *number*

The HTTP status code

**`default`** 500
