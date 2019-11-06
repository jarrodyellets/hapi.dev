
# External module: "iron/5.1.4/index.d"

## Index

### Modules

* [password](_iron_5_1_4_index_d_.password.md)

### Interfaces

* [Algorithms](../interfaces/_iron_5_1_4_index_d_.algorithms.md)
* [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md)
* [HMacResult](../interfaces/_iron_5_1_4_index_d_.hmacresult.md)
* [Key](../interfaces/_iron_5_1_4_index_d_.key.md)
* [SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md)
* [SealOptionsSub](../interfaces/_iron_5_1_4_index_d_.sealoptionssub.md)

### Type aliases

* [Password](_iron_5_1_4_index_d_.md#password)

### Variables

* [algorithms](_iron_5_1_4_index_d_.md#const-algorithms)
* [defaults](_iron_5_1_4_index_d_.md#const-defaults)
* [macFormatVersion](_iron_5_1_4_index_d_.md#const-macformatversion)
* [macPrefix](_iron_5_1_4_index_d_.md#const-macprefix)

### Functions

* [decrypt](_iron_5_1_4_index_d_.md#decrypt)
* [encrypt](_iron_5_1_4_index_d_.md#encrypt)
* [generateKey](_iron_5_1_4_index_d_.md#generatekey)
* [hmacWithPassword](_iron_5_1_4_index_d_.md#hmacwithpassword)
* [seal](_iron_5_1_4_index_d_.md#seal)
* [unseal](_iron_5_1_4_index_d_.md#unseal)

## Type aliases

###  Password

Ƭ **Password**: *string | Buffer*

Password secret string or buffer.

## Variables

### `Const` algorithms

• **algorithms**: *[Algorithms](../interfaces/_iron_5_1_4_index_d_.algorithms.md)*

Configuration of each supported algorithm.

___

### `Const` defaults

• **defaults**: *[SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md)*

The default encryption and integrity settings.

___

### `Const` macFormatVersion

• **macFormatVersion**: *string*

MAC normalization format version.

___

### `Const` macPrefix

• **macPrefix**: *string*

MAC normalization prefix.

## Functions

###  decrypt

▸ **decrypt**(`password`: [Password](_iron_5_1_4_index_d_.md#password), `options`: [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md), `data`: string): *Promise‹string›*

Decrypt data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`password` | [Password](_iron_5_1_4_index_d_.md#password) | A password string or buffer key |
`options` | [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md) | Object used to customize the key derivation algorithm |
`data` | string | String to decrypt  |

**Returns:** *Promise‹string›*

the decrypted string

___

###  encrypt

▸ **encrypt**(`password`: [Password](_iron_5_1_4_index_d_.md#password), `options`: [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md), `data`: string): *Promise‹object›*

Encrypt data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`password` | [Password](_iron_5_1_4_index_d_.md#password) | A password string or buffer key |
`options` | [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md) | Object used to customize the key derivation algorithm |
`data` | string | String to encrypt  |

**Returns:** *Promise‹object›*

an object with the following keys: encrypted, key

___

###  generateKey

▸ **generateKey**(`password`: [Password](_iron_5_1_4_index_d_.md#password), `options`: [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md)): *Promise‹[Key](../interfaces/_iron_5_1_4_index_d_.key.md)›*

Generates a key from the password

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`password` | [Password](_iron_5_1_4_index_d_.md#password) | A password string or buffer key |
`options` | [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md) | Object used to customize the key derivation algorithm  |

**Returns:** *Promise‹[Key](../interfaces/_iron_5_1_4_index_d_.key.md)›*

An object with keys: key, salt, iv

___

###  hmacWithPassword

▸ **hmacWithPassword**(`password`: [Password](_iron_5_1_4_index_d_.md#password), `options`: [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md), `data`: string): *Promise‹[HMacResult](../interfaces/_iron_5_1_4_index_d_.hmacresult.md)›*

Calculates a HMAC digest

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`password` | [Password](_iron_5_1_4_index_d_.md#password) | A password string or buffer key |
`options` | [GenerateKeyOptions](../interfaces/_iron_5_1_4_index_d_.generatekeyoptions.md) | Object used to customize the key derivation algorithm |
`data` | string | String to calculate the HMAC over  |

**Returns:** *Promise‹[HMacResult](../interfaces/_iron_5_1_4_index_d_.hmacresult.md)›*

An object with the following keys: digest, salt

___

###  seal

▸ **seal**(`object`: any, `password`: [Password](_iron_5_1_4_index_d_.md#password) | [Secret](../interfaces/_iron_5_1_4_index_d_.password.secret.md) | [Specific](../interfaces/_iron_5_1_4_index_d_.password.specific.md), `options`: [SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md)): *Promise‹string›*

Serializes, encrypts, and signs objects into an iron protocol string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | Data being sealed |
`password` | [Password](_iron_5_1_4_index_d_.md#password) &#124; [Secret](../interfaces/_iron_5_1_4_index_d_.password.secret.md) &#124; [Specific](../interfaces/_iron_5_1_4_index_d_.password.specific.md) | A string, buffer, or object |
`options` | [SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md) | Object used to customize the key derivation algorithm  |

**Returns:** *Promise‹string›*

Iron sealed string

___

###  unseal

▸ **unseal**(`sealed`: string, `password`: [Password](_iron_5_1_4_index_d_.md#password) | [Hash](../interfaces/_iron_5_1_4_index_d_.password.hash.md), `options?`: [SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md)): *Promise‹any›*

Verifies, decrypts, and reconstruct an iron protocol string into an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sealed` | string | The iron protocol string generated with seal() |
`password` | [Password](_iron_5_1_4_index_d_.md#password) &#124; [Hash](../interfaces/_iron_5_1_4_index_d_.password.hash.md) | A string, buffer, or object |
`options?` | [SealOptions](../interfaces/_iron_5_1_4_index_d_.sealoptions.md) | Object used to customize the key derivation algorithm  |

**Returns:** *Promise‹any›*

the verified decrypted object
