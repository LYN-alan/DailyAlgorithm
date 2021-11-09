#### 两个数组的交集 II

##### 题目描述

> 给定两个数组，编写一个函数来计算它们的交集。

##### 示例1

> ```js
> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2,2]
> ```

##### 示例2

> ```js
> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出：[4,9]
> ```

##### 说明：

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
- 我们可以不考虑输出结果的顺序

##### 题解

思路是通过哈希表来存储其中数组中的数字，key为数字，value为数字出现的次数，然后循环两外一个数组，如果存在在哈希表中，则取出该数字，并将哈希表中对应的key减一，如果拿到的key的值不大于0则证明是重复的数字，不记录

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = new Map()
    for(let i = 0; i < nums1.length; i++){
        if(hash.has(nums1[i])){
            hash.set(nums1[i], hash.get(nums1[i]) + 1)
        }else{
            hash.set(nums1[i], 1)
        }
    }
    let list = []
    for(let i = 0; i < nums2.length; i++){
        if(hash.has(nums2[i]) && hash.get(nums2[i]) > 0){
            list.push(nums2[i])
            hash.set(nums2[i], hash.get(nums2[i]) - 1)
        }
    }
    return list
};
```

顺带说一句，因为leetcode今日的每日一题难度升级，对自己来说有点难，所以选了另外一道题来做，算是偷懒了，还是太笨了，所以继续刷，不能停！！！！

打卡~收工~~~~
