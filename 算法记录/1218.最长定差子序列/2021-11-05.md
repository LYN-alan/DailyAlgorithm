#### 1218.最长定差子序列

##### 题目描述

> 给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。
>
> 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

##### 解法

- 利用哈希来解决
- 循环数组，存入的key为数组中每一项的值和diff的差值，这样的话，如果存在等差子序列，则循环的符合条件的值时，此时的值和diff 的差值就是上一次符合条件时存入的key值，然后就更新子序列的长度，最后计算出最长子序列，如果不存在，则每一次的计算存入值都是1，最后返回1，OK,结束！！！！

```js
function longestSubsequence(arr, diff){
    let ans = 0;
    let dp = new Map()
    for(const v of arr){
        dp.set(v, (dp.get(v - diff) || 0) + 1)
        ans = Math.max(dp.get(v), ans)
    }
    return ans
}
```

