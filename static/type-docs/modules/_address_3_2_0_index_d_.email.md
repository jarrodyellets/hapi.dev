
# Module: email

## Index

### Interfaces

* [Options](../interfaces/_address_3_2_0_index_d_.email.options.md)

### Functions

* [analyze](_address_3_2_0_index_d_.email.md#analyze)
* [isValid](_address_3_2_0_index_d_.email.md#isvalid)

## Functions

###  analyze

▸ **analyze**(`email`: string, `options?`: [Options](../interfaces/_address_3_2_0_index_d_.email.options.md)): *[Analysis](../interfaces/_address_3_2_0_index_d_.analysis.md) | null*

Analyzes a string to verify it is a valid email address.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`email` | string | the email address to validate. |
`options?` | [Options](../interfaces/_address_3_2_0_index_d_.email.options.md) | optional settings.  |

**Returns:** *[Analysis](../interfaces/_address_3_2_0_index_d_.analysis.md) | null*

- undefined when valid, otherwise an object with single error key with a string message value.

___

###  isValid

▸ **isValid**(`email`: string, `options?`: [Options](../interfaces/_address_3_2_0_index_d_.email.options.md)): *boolean*

Analyzes a string to verify it is a valid email address.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`email` | string | the email address to validate. |
`options?` | [Options](../interfaces/_address_3_2_0_index_d_.email.options.md) | optional settings.  |

**Returns:** *boolean*

- true when valid, otherwise false.
