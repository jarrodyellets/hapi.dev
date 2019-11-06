
# External module: "accept/4.0.0/index.d"

## Index

### Modules

* [parseAll](_accept_4_0_0_index_d_.parseall.md)

### Functions

* [charset](_accept_4_0_0_index_d_.md#charset)
* [charsets](_accept_4_0_0_index_d_.md#charsets)
* [encoding](_accept_4_0_0_index_d_.md#encoding)
* [encodings](_accept_4_0_0_index_d_.md#encodings)
* [language](_accept_4_0_0_index_d_.md#language)
* [languages](_accept_4_0_0_index_d_.md#languages)
* [mediaType](_accept_4_0_0_index_d_.md#mediatype)
* [mediaTypes](_accept_4_0_0_index_d_.md#mediatypes)

## Functions

###  charset

▸ **charset**(`header?`: string, `preferences?`: string[]): *string*

Identifies the best character-set for an HTTP response based on the HTTP request Accept-Charset header.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Charset header content. |
`preferences?` | string[] | an optional array of character-set strings in order of server preference.  |

**Returns:** *string*

a string with the preferred accepted character-set.

___

###  charsets

▸ **charsets**(`header?`: string): *string[]*

Sorts the character-sets in the HTTP request Accept-Charset header based on client preference from most to least desired.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Charset header content.  |

**Returns:** *string[]*

an array of strings of character-sets sorted from the most to the least desired.

___

###  encoding

▸ **encoding**(`header?`: string, `preferences?`: string[]): *string*

Identifies the best encoding for an HTTP response based on the HTTP request Accept-Encoding header.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Encoding header content. |
`preferences?` | string[] | an optional array of encoding strings in order of server preference.  |

**Returns:** *string*

a string with the preferred accepted encoding.

___

###  encodings

▸ **encodings**(`header?`: string): *string[]*

Sorts the encodings in the HTTP request Accept-Encoding header based on client preference from most to least desired.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Encoding header content.  |

**Returns:** *string[]*

an array of strings of encodings sorted from the most to the least desired.

___

###  language

▸ **language**(`header?`: string, `preferences?`: string[]): *string*

Identifies the best language for an HTTP response based on the HTTP request Accept-Language header.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Language header content. |
`preferences?` | string[] | an optional array of language strings in order of server preference.  |

**Returns:** *string*

a string with the preferred accepted language.

___

###  languages

▸ **languages**(`header?`: string): *string[]*

Sorts the languages in the HTTP request Accept-Language header based on client preference from most to least desired.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept-Language header content.  |

**Returns:** *string[]*

an array of strings of languages sorted from the most to the least desired.

___

###  mediaType

▸ **mediaType**(`header?`: string, `preferences?`: string[]): *string*

Identifies the best media-type for an HTTP response based on the HTTP request Accept header.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept header content. |
`preferences?` | string[] | an optional array of media-type strings in order of server preference.  |

**Returns:** *string*

a string with the preferred accepted media-type.

___

###  mediaTypes

▸ **mediaTypes**(`header?`: string): *string[]*

Sorts the media-types in the HTTP request Accept header based on client preference from most to least desired.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header?` | string | the HTTP Accept header content.  |

**Returns:** *string[]*

an array of strings of media-types sorted from the most to the least desired.
