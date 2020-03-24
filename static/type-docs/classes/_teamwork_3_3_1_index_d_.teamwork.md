
# Class: Teamwork <**Results**>

## Type parameters

▪ **Results**: *any | any[]*

## Hierarchy

* **Teamwork**

## Index

### Constructors

* [constructor](_teamwork_3_3_1_index_d_.teamwork.md#constructor)

### Properties

* [work](_teamwork_3_3_1_index_d_.teamwork.md#work)

### Methods

* [attend](_teamwork_3_3_1_index_d_.teamwork.md#attend)
* [regroup](_teamwork_3_3_1_index_d_.teamwork.md#regroup)

## Constructors

###  constructor

\+ **new Teamwork**(`options?`: [Options](../interfaces/_teamwork_3_3_1_index_d_.options.md)): *[Teamwork](_teamwork_3_3_1_index_d_.teamwork.md)*

Start a new team work.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_teamwork_3_3_1_index_d_.options.md) | Configuration of the team work.  |

**Returns:** *[Teamwork](_teamwork_3_3_1_index_d_.teamwork.md)*

## Properties

###  work

• **work**: *Promise‹Results›*

Resulting work when all the meetings are done.

## Methods

###  attend

▸ **attend**(`note?`: Error | [ElementOf](../modules/_teamwork_3_3_1_index_d_.md#elementof)‹Results›): *void*

Attend a single meeting.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`note?` | Error &#124; [ElementOf](../modules/_teamwork_3_3_1_index_d_.md#elementof)‹Results› | An optional note that will be included in the work's results. If an error is provided, the work will be immediately rejected with that error.  |

**Returns:** *void*

___

###  regroup

▸ **regroup**(`options?`: [Options](../interfaces/_teamwork_3_3_1_index_d_.options.md)): *Promise‹void›*

Wait for the current work to be done and start another team work.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](../interfaces/_teamwork_3_3_1_index_d_.options.md) | New configuration of the team work.  |

**Returns:** *Promise‹void›*
