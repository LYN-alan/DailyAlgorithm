#### 检测大写字母

##### 题目描述

> 我们定义，在以下情况时，单词的大写用法是正确的：
>
> - 全部字母都是大写，比如 "USA" 。
> - 单词中所有字母都不是大写，比如 "leetcode" 。
> - 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 
>
> 给你一个字符串word。如果大写用法正确，返回 true；否则返回 false。

##### 示例1

> ```js
> 输入：word = "USA"
> 输出：true
> ```

##### 示例2

> ```js
> 输入：word = "FlaG"
> 输出：false
> ```

##### 题解

思路是根据题目描述可得，全部大写和全部小写通过，首字母大写，其余为小写的通过，上代码

```js
var detectCapitalUse = function(word){
    // 判断是否满足全部大写或者全部小写
    if(word.toUpperCase() === word || word.toLowerCase() === word) return true
    // 判断首字母是否大写，不通过的排除
    if(word[0].toUpperCase() === word[0]){
        // 再判断剩余的是否全都是小写
        if(word.slice(1).toLowerCase() === word.slice(1)){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
```

今日打卡完成~~~~

