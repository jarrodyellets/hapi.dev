
# Class: Sorter <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Sorter**

## Index

### Properties

* [nodes](_topo_4_0_1_index_d_.sorter.md#nodes)

### Methods

* [add](_topo_4_0_1_index_d_.sorter.md#add)
* [merge](_topo_4_0_1_index_d_.sorter.md#merge)

## Properties

###  nodes

• **nodes**: *T[]*

An array of the topologically sorted nodes. This list is renewed upon each call to topo.add().

## Methods

###  add

▸ **add**(`nodes`: T | T[], `options?`: [Options](../interfaces/_topo_4_0_1_index_d_.options.md)): *T[]*

Adds a node or list of nodes to be added and topologically sorted

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodes` | T &#124; T[] | A mixed value or array of mixed values to be added as nodes to the topologically sorted list. |
`options?` | [Options](../interfaces/_topo_4_0_1_index_d_.options.md) | Optional sorting information about the nodes.  |

**Returns:** *T[]*

Returns an array of the topologically sorted nodes.

___

###  merge

▸ **merge**(`others`: [Sorter](_topo_4_0_1_index_d_.sorter.md)‹T› | [Sorter](_topo_4_0_1_index_d_.sorter.md)‹T›[]): *T[]*

Merges another Sorter object into the current object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`others` | [Sorter](_topo_4_0_1_index_d_.sorter.md)‹T› &#124; [Sorter](_topo_4_0_1_index_d_.sorter.md)‹T›[] | The other object or array of objects to be merged into the current one.  |

**Returns:** *T[]*

Returns an array of the topologically sorted nodes.
