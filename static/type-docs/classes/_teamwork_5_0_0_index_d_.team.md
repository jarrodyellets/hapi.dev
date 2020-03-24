
# Class: Team <**Results**>

Team bridges between callbacks and promises. Used to convert callback-based
interfaces to a promise-based result including support for collecting multiple
callback events into a single promise.

## Type parameters

▪ **Results**: *any | any[]*

## Hierarchy

* **Team**

## Index

### Interfaces

* [Options](../interfaces/_teamwork_5_0_0_index_d_.team.options.md)

### Type aliases

* [ElementOf](_teamwork_5_0_0_index_d_.team.md#static-elementof)

### Constructors

* [constructor](_teamwork_5_0_0_index_d_.team.md#constructor)

### Properties

* [work](_teamwork_5_0_0_index_d_.team.md#work)

### Methods

* [attend](_teamwork_5_0_0_index_d_.team.md#attend)
* [regroup](_teamwork_5_0_0_index_d_.team.md#regroup)

## Type aliases

### `Static` ElementOf

Ƭ **ElementOf**:

## Constructors

###  constructor

\+ **new Team**(`options?`: [Options](../interfaces/_teamwork_5_0_0_index_d_.team.options.md)): *[Team](_teamwork_5_0_0_index_d_.team.md)*

Start a new team work.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_teamwork_5_0_0_index_d_.team.options.md) | Configuration of the team work.  |

**Returns:** *[Team](_teamwork_5_0_0_index_d_.team.md)*

## Properties

###  work

• **work**: *Promise‹Results›*

Resulting work when all the meetings are done.

## Methods

###  attend

▸ **attend**(`note?`: Error | [ElementOf](_teamwork_5_0_0_index_d_.team.md#static-elementof)‹Results›): *void*

Attend a single meeting.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`note?` | Error &#124; [ElementOf](_teamwork_5_0_0_index_d_.team.md#static-elementof)‹Results› | An optional note that will be included in the work's results. If an error is provided, the work will be immediately rejected with that error.  |

**Returns:** *void*

___

###  regroup

▸ **regroup**(`options?`: [Options](../interfaces/_teamwork_5_0_0_index_d_.team.options.md)): *Promise‹void›*

Wait for the current work to be done and start another team work.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_teamwork_5_0_0_index_d_.team.options.md) | New configuration of the team work.  |

**Returns:** *Promise‹void›*

a promise that resolves when the current work is done.
