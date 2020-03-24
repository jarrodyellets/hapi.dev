
# Class: Events <**T**>

Events emitter via an async iterator interface.

## Type parameters

▪ **T**

## Hierarchy

* **Events**

## Index

### Classes

* [Iterator](_teamwork_5_0_0_index_d_.events.iterator.md)

### Methods

* [emit](_teamwork_5_0_0_index_d_.events.md#emit)
* [end](_teamwork_5_0_0_index_d_.events.md#end)
* [iterator](_teamwork_5_0_0_index_d_.events.md#iterator)

## Methods

###  emit

▸ **emit**(`value`: T): *void*

Emits an event to be consumed via the iterator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T |   |

**Returns:** *void*

___

###  end

▸ **end**(): *void*

Informs the iterator that no new events will be emitted.

**Returns:** *void*

___

###  iterator

▸ **iterator**(): *[Iterator](_teamwork_5_0_0_index_d_.events.iterator.md)‹T›*

Returns a standard async iterator interface object.

**Returns:** *[Iterator](_teamwork_5_0_0_index_d_.events.iterator.md)‹T›*

async iterator interface object.
