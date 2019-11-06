
# Module: intersect

## Callable

▸ **intersect**<**T1**, **T2**>(`array1`: [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T1›, `array2`: [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T2›, `justFirst?`: false): *Array‹T1 | T2›*

Find the common unique items in two arrays.

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array1` | [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T1› | The first array to compare. |
`array2` | [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T2› | The second array to compare. |
`justFirst?` | false | If true, return the first overlapping value. Defaults to false.  |

**Returns:** *Array‹T1 | T2›*

- An array of the common items. If `justFirst` is true, returns the first common item.

▸ **intersect**<**T1**, **T2**>(`array1`: [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T1›, `array2`: [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T2›, `justFirst`: true): *T1 | T2*

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array1` | [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T1› |
`array2` | [Array](_hoek_6_2_5_index_d_.intersect.md#array)‹T2› |
`justFirst` | true |

**Returns:** *T1 | T2*

## Index

### Type aliases

* [Array](_hoek_6_2_5_index_d_.intersect.md#array)

## Type aliases

###  Array

Ƭ **Array**: *ArrayLike‹T› | Set‹T› | null*
