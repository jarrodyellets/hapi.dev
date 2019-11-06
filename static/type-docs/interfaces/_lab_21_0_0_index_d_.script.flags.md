
# Interface: Flags

## Hierarchy

* **Flags**

## Index

### Properties

* [context](_lab_21_0_0_index_d_.script.flags.md#context)
* [onCleanup](_lab_21_0_0_index_d_.script.flags.md#optional-oncleanup)
* [onUncaughtException](_lab_21_0_0_index_d_.script.flags.md#optional-onuncaughtexception)
* [onUnhandledRejection](_lab_21_0_0_index_d_.script.flags.md#optional-onunhandledrejection)

### Methods

* [mustCall](_lab_21_0_0_index_d_.script.flags.md#mustcall)
* [note](_lab_21_0_0_index_d_.script.flags.md#note)

## Properties

###  context

• **context**: *Record‹string, any›*

An object that is passed to `before` and `after` functions in addition to tests themselves.

___

### `Optional` onCleanup

• **onCleanup**? : *[Action](_lab_21_0_0_index_d_.script.action.md)*

A property that can be assigned a cleanup function registered at runtime to be executed after the test completes.

___

### `Optional` onUncaughtException

• **onUncaughtException**? : *[ErrorHandler](_lab_21_0_0_index_d_.script.errorhandler.md)*

A property that can be assigned an override for global exception handling.

___

### `Optional` onUnhandledRejection

• **onUnhandledRejection**? : *[ErrorHandler](_lab_21_0_0_index_d_.script.errorhandler.md)*

A property that can be assigned an override function for global rejection handling.

## Methods

###  mustCall

▸ **mustCall**(`func`: Function, `count`: number): *Function*

Sets a requirement that a function must be called a certain number of times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | Function | the function to be called. |
`count` | number | the number of required invocations.  |

**Returns:** *Function*

a wrapped function.

___

###  note

▸ **note**(`note`: string): *void*

Adds notes to the test log.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`note` | string | a string to be included in the console reporter at the end of the output.  |

**Returns:** *void*
