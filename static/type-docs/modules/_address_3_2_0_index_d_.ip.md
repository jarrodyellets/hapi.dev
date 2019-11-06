
# Module: ip

## Index

### Interfaces

* [Expression](../interfaces/_address_3_2_0_index_d_.ip.expression.md)
* [Options](../interfaces/_address_3_2_0_index_d_.ip.options.md)

### Type aliases

* [Cidr](_address_3_2_0_index_d_.ip.md#cidr)
* [Version](_address_3_2_0_index_d_.ip.md#version)

### Functions

* [regex](_address_3_2_0_index_d_.ip.md#regex)

## Type aliases

###  Cidr

Ƭ **Cidr**: *"optional" | "required" | "forbidden"*

___

###  Version

Ƭ **Version**: *"ipv4" | "ipv6" | "ipvfuture"*

## Functions

###  regex

▸ **regex**(`options?`: [Options](../interfaces/_address_3_2_0_index_d_.ip.options.md)): *[Expression](../interfaces/_address_3_2_0_index_d_.ip.expression.md)*

Generates a regular expression used to validate IP addresses.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_address_3_2_0_index_d_.ip.options.md) | optional settings.  |

**Returns:** *[Expression](../interfaces/_address_3_2_0_index_d_.ip.expression.md)*

an object with the regular expression and meta data.
