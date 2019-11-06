
# Module: uri

## Index

### Modules

* [Options](_address_3_2_0_index_d_.uri.options.md)

### Interfaces

* [Expression](../interfaces/_address_3_2_0_index_d_.uri.expression.md)

### Functions

* [decode](_address_3_2_0_index_d_.uri.md#decode)
* [regex](_address_3_2_0_index_d_.uri.md#regex)

## Functions

###  decode

▸ **decode**(`string`: string): *string | null*

Faster version of decodeURIComponent() that does not throw.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | the URL string to decode.  |

**Returns:** *string | null*

the decoded string or null if invalid.

___

###  regex

▸ **regex**(`options?`: [Options](_address_3_2_0_index_d_.uri.options.md)): *[Expression](../interfaces/_address_3_2_0_index_d_.uri.expression.md)*

Generates a regular expression used to validate URI addresses.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](_address_3_2_0_index_d_.uri.options.md) | optional settings.  |

**Returns:** *[Expression](../interfaces/_address_3_2_0_index_d_.uri.expression.md)*

an object with the regular expression and meta data.
