
# Class: Bench

A benchmarking timer, using the internal node clock for maximum accuracy.

## Hierarchy

* **Bench**

## Index

### Constructors

* [constructor](_hoek_6_2_5_index_d_.bench.md#constructor)

### Properties

* [ts](_hoek_6_2_5_index_d_.bench.md#ts)

### Methods

* [elapsed](_hoek_6_2_5_index_d_.bench.md#elapsed)
* [reset](_hoek_6_2_5_index_d_.bench.md#reset)
* [now](_hoek_6_2_5_index_d_.bench.md#static-now)

## Constructors

###  constructor

\+ **new Bench**(): *[Bench](_hoek_6_2_5_index_d_.bench.md)*

**Returns:** *[Bench](_hoek_6_2_5_index_d_.bench.md)*

## Properties

###  ts

• **ts**: *number*

The starting timestamp expressed in the number of milliseconds since the epoch.

## Methods

###  elapsed

▸ **elapsed**(): *number*

The time in milliseconds since the object was created.

**Returns:** *number*

___

###  reset

▸ **reset**(): *void*

Reset the `ts` value to now.

**Returns:** *void*

___

### `Static` now

▸ **now**(): *number*

The current time in milliseconds since the epoch.

**Returns:** *number*
