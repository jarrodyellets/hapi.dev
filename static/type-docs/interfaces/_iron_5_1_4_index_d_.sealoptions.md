
# Interface: SealOptions

Options for customizing the key derivation algorithm used to generate encryption and integrity verification keys as well as the algorithms and salt sizes used.

## Hierarchy

* **SealOptions**

## Index

### Properties

* [encryption](_iron_5_1_4_index_d_.sealoptions.md#encryption)
* [integrity](_iron_5_1_4_index_d_.sealoptions.md#integrity)
* [localtimeOffsetMsec](_iron_5_1_4_index_d_.sealoptions.md#localtimeoffsetmsec)
* [timestampSkewSec](_iron_5_1_4_index_d_.sealoptions.md#timestampskewsec)
* [ttl](_iron_5_1_4_index_d_.sealoptions.md#ttl)

## Properties

###  encryption

• **encryption**: *[SealOptionsSub](_iron_5_1_4_index_d_.sealoptionssub.md)*

Encryption step options.

___

###  integrity

• **integrity**: *[SealOptionsSub](_iron_5_1_4_index_d_.sealoptionssub.md)*

Integrity step options.

___

###  localtimeOffsetMsec

• **localtimeOffsetMsec**: *number*

Local clock time offset, expressed in number of milliseconds (positive or negative). Defaults to 0.

___

###  timestampSkewSec

• **timestampSkewSec**: *number*

Number of seconds of permitted clock skew for incoming expirations. Defaults to 60 seconds.

___

###  ttl

• **ttl**: *number*

Sealed object lifetime in milliseconds where 0 means forever. Defaults to 0.
