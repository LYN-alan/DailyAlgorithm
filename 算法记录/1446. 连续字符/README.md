#### 1446.连续字符

##### 题目描述

> 给你一个字符串 `s` ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
>
> 请你返回字符串的能量。

##### 示例1

> ```js
> 输入：s = "leetcode"
> 输出：2
> 解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
> ```

##### 示例2

> ```js
> 输入：s = "abbcccddddeeeeedcba"
> 输出：5
> 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
> ```

##### 题解思路

循环遍历解法，定义两个初始值，判断相邻的字母是否相等，相等则步进累计值，取当前值和累计值的最大值，不等则重置初始值，重新计算。代码如下

```js
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let ans = 1, cnt = 1;
    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i - 1]){
            cnt++
            ans = Math.max(ans, cnt)
        }else{
            cnt = 1
        }
    }
    return ans
}

```

新的一月开始，加油！！！