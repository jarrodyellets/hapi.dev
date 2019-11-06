
# External module: "code/7.0.0/index.d"

## Index

### Modules

* [expect](_code_7_0_0_index_d_.expect.md)
* [thrownAt](_code_7_0_0_index_d_.thrownat.md)

### Interfaces

* [Settings](../interfaces/_code_7_0_0_index_d_.settings.md)

### Variables

* [settings](_code_7_0_0_index_d_.md#const-settings)

### Functions

* [count](_code_7_0_0_index_d_.md#count)
* [fail](_code_7_0_0_index_d_.md#fail)
* [incomplete](_code_7_0_0_index_d_.md#incomplete)

## Variables

### `Const` settings

• **settings**: *[Settings](../interfaces/_code_7_0_0_index_d_.settings.md)*

Configure code behavior

## Functions

###  count

▸ **count**(): *number*

Returns the total number of assertions created using the `expect()` method.

**Returns:** *number*

total number of assertions.

___

###  fail

▸ **fail**(`message?`: string): *void*

Makes the test fail.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message?` | string | the error message generated.  |

**Returns:** *void*

___

###  incomplete

▸ **incomplete**(): *string[] | null*

Returns an array of the locations where incomplete assertions were declared or `null` if no incomplete assertions found.

**Returns:** *string[] | null*

array of incomplete assertion locations.
