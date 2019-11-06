
# Module: domain

## Index

### Modules

* [Tlds](_address_3_2_0_index_d_.domain.tlds.md)

### Interfaces

* [Options](../interfaces/_address_3_2_0_index_d_.domain.options.md)

### Functions

* [analyze](_address_3_2_0_index_d_.domain.md#analyze)
* [isValid](_address_3_2_0_index_d_.domain.md#isvalid)

## Functions

###  analyze

▸ **analyze**(`domain`: string, `options?`: [Options](../interfaces/_address_3_2_0_index_d_.domain.options.md)): *[Analysis](../interfaces/_address_3_2_0_index_d_.analysis.md) | null*

Analyzes a string to verify it is a valid domain name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | string | the domain name to validate. |
`options?` | [Options](../interfaces/_address_3_2_0_index_d_.domain.options.md) | optional settings.  |

**Returns:** *[Analysis](../interfaces/_address_3_2_0_index_d_.analysis.md) | null*

- undefined when valid, otherwise an object with single error key with a string message value.

___

###  isValid

▸ **isValid**(`domain`: string, `options?`: [Options](../interfaces/_address_3_2_0_index_d_.domain.options.md)): *boolean*

Analyzes a string to verify it is a valid domain name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | string | the domain name to validate. |
`options?` | [Options](../interfaces/_address_3_2_0_index_d_.domain.options.md) | optional settings.  |

**Returns:** *boolean*

- true when valid, otherwise false.
