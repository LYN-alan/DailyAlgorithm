#### 859.亲密字符串

##### 题目描述

> 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
>
> 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
>
> - 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

##### 实例1

> 输入：s = "ab", goal = "ba"
> 输出：true
> 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。

##### 实例2

> 输入：s = "ab", goal = "ab"
> 输出：false
> 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。

##### 实例3

> 输入：s = "aa", goal = "aa"
> 输出：true
> 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。

##### 题解

思路是首先比较两个字符串是否长度相等，然后判断两个字符串是否相等，如果相等，则比较字符串的长度和字符串去重后的长度，因为只有存在重复字母，才可能实现调换两个字母之后仍然相等，如果没有重复的字母，则不可能符合题意，最后就是比较两个字符串不相等的情况，正常操作，循环字符串，找出位置不相等的字符，然后使其中一个取反，再比较两个字符串是否长度等于2，而且完全相等，代码如下

```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false
    if(s === goal){
        return s.length > new Set(s).size
    }
    let a = '',b = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            a = s[i] + a
            b += goal[i]
        }
    }
    return a.length === 2 &&  a === b
}
```

OK，今日动脑结束~~~~