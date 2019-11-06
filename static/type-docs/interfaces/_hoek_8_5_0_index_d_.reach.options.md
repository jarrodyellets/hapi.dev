
# Interface: Options

## Hierarchy

* **Options**

## Index

### Properties

* [default](_hoek_8_5_0_index_d_.reach.options.md#optional-default)
* [functions](_hoek_8_5_0_index_d_.reach.options.md#optional-functions)
* [iterables](_hoek_8_5_0_index_d_.reach.options.md#optional-iterables)
* [separator](_hoek_8_5_0_index_d_.reach.options.md#optional-separator)
* [strict](_hoek_8_5_0_index_d_.reach.options.md#optional-strict)

## Properties

### `Optional` default

• **default**? : *any*

Value to return if the path or value is not present. No default value.

**`default`** false

___

### `Optional` functions

• **functions**? : *boolean*

If true, allows traversing functions for properties. false will throw an error if a function is part of the chain.

**`default`** true

___

### `Optional` iterables

• **iterables**? : *boolean*

If true, allows traversing Set and Map objects for properties. false will return undefined regardless of the Set or Map passed.

**`default`** false

___

### `Optional` separator

• **separator**? : *string*

String to split chain path on. Defaults to '.'.

**`default`** false

___

### `Optional` strict

• **strict**? : *boolean*

If true, will throw an error on missing member in the chain. Default to false.

**`default`** false
