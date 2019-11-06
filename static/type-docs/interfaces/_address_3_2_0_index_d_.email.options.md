
# Interface: Options

## Hierarchy

* [Options](_address_3_2_0_index_d_.domain.options.md)

  ↳ **Options**

## Index

### Properties

* [allowUnicode](_address_3_2_0_index_d_.email.options.md#optional-allowunicode)
* [ignoreLength](_address_3_2_0_index_d_.email.options.md#optional-ignorelength)
* [minDomainSegments](_address_3_2_0_index_d_.email.options.md#optional-mindomainsegments)
* [tlds](_address_3_2_0_index_d_.email.options.md#optional-tlds)

## Properties

### `Optional` allowUnicode

• **allowUnicode**? : *boolean*

*Inherited from [Options](_address_3_2_0_index_d_.domain.options.md).[allowUnicode](_address_3_2_0_index_d_.domain.options.md#optional-allowunicode)*

Determines whether Unicode characters are allowed.

**`default`** true

___

### `Optional` ignoreLength

• **ignoreLength**? : *boolean*

Determines whether to ignore the standards maximum email length limit.

**`default`** false

___

### `Optional` minDomainSegments

• **minDomainSegments**? : *number*

*Inherited from [Options](_address_3_2_0_index_d_.domain.options.md).[minDomainSegments](_address_3_2_0_index_d_.domain.options.md#optional-mindomainsegments)*

The minimum number of domain segments (e.g. `x.y.z` has 3 segments) required.

**`default`** 2

___

### `Optional` tlds

• **tlds**? : *[Allow](_address_3_2_0_index_d_.domain.tlds.allow.md) | [Deny](_address_3_2_0_index_d_.domain.tlds.deny.md) | boolean*

*Inherited from [Options](_address_3_2_0_index_d_.domain.options.md).[tlds](_address_3_2_0_index_d_.domain.options.md#optional-tlds)*

Top-level-domain options

**`default`** true
