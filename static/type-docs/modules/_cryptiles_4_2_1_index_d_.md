
# External module: "cryptiles/4.2.1/index.d"

## Index

### Functions

* [fixedTimeComparison](_cryptiles_4_2_1_index_d_.md#fixedtimecomparison)
* [randomBits](_cryptiles_4_2_1_index_d_.md#randombits)
* [randomDigits](_cryptiles_4_2_1_index_d_.md#randomdigits)
* [randomString](_cryptiles_4_2_1_index_d_.md#randomstring)

## Functions

###  fixedTimeComparison

▸ **fixedTimeComparison**(`a`: string | Array‹any›, `b`: string | Array‹any›): *boolean*

Generate a buffer of random bits

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | string &#124; Array‹any› | Data to compare |
`b` | string &#124; Array‹any› | Data to compare  |

**Returns:** *boolean*

A boolean comparing a and b

___

###  randomBits

▸ **randomBits**(`bits`: number): *Buffer*

Generate a buffer of random bits

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bits` | number | Number of bits  |

**Returns:** *Buffer*

A buffer of random bits

___

###  randomDigits

▸ **randomDigits**(`size`: number): *string*

Return a random string of digits

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | Size of the digits  |

**Returns:** *string*

A random string of digits

___

###  randomString

▸ **randomString**(`size`: number): *string*

Generate a cryptographically strong pseudo-random data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | Size of the string  |

**Returns:** *string*

A cryptographically strong pseudo-random data
