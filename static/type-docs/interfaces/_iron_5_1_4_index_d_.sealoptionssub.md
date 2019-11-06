
# Interface: SealOptionsSub

seal() method options.

## Hierarchy

* **SealOptionsSub**

## Index

### Properties

* [algorithm](_iron_5_1_4_index_d_.sealoptionssub.md#algorithm)
* [iterations](_iron_5_1_4_index_d_.sealoptionssub.md#iterations)
* [minPasswordlength](_iron_5_1_4_index_d_.sealoptionssub.md#minpasswordlength)
* [saltBits](_iron_5_1_4_index_d_.sealoptionssub.md#saltbits)

## Properties

###  algorithm

• **algorithm**: *keyof Algorithms*

The algorithm used. Defaults to 'aes-256-cbc' for encryption and 'sha256' for integrity.

___

###  iterations

• **iterations**: *number*

The number of iterations used to derive a key from the password. Defaults to 1.

___

###  minPasswordlength

• **minPasswordlength**: *number*

Minimum password size. Defaults to 32.

___

###  saltBits

• **saltBits**: *number*

The length of the salt (random buffer used to ensure that two identical objects will generate a different encrypted result). Defaults to 256.
