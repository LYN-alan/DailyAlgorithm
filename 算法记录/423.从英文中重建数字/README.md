#### 423.从英文中重建数字

#### 题目描述

> 给你一个字符串`s`,其中包含字母打乱顺序的用英文单词表示的若干数字（0-9）.按**升序**返回原始数字

##### 示例1

> ```js
> 输入：s = "owoztneoer"
> 输出："012"
> ```

##### 示例2

> ```js
> 输入：s = "fviefuro"
> 输出："45"
> ```

##### 解题思路

解题之前先看下`0-9`数字对应的英文单词`one, two, three, four, five, six, seven, eight, nine` ，然后从中寻找规律：

- 某些数字中有些英文单词只出现了依次，`0,2,4,6,8`数字中对应的字母`z, w, u, x, g`只出现了一次
- 某些数字中用到字母和之前出现的单次字母重合，做减法可得数字个数

因此，使用哈希表，先把给的字符串中每个单词出现的次数统计下来，然后根据规律，找出存在的数字个数

```js
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
      let result = []
    // 定义一个hash，记录字符串中各个字母初选的次数
    let hash  = new Map()
    for(let i = 0; i < s.length; i++){
        if(hash.has(s[i])){
            hash.set(s[i], hash.get(s[i]) + 1)
        }else{
            hash.set(s[i], 1)
        }
    }
    // 根据规律，可得0, 2, 4, 6, 8 数字的个数对应的就是字母z, w, u, x, g的个数
    // 定义一个长度为10的数组，存储数字的个数
    numsArr = new Array().fill(0)
    // 计算0的个数
    numsArr[0] = hash.get('z') || 0
    // 2
    numsArr[2] = hash.get('w') || 0
    // 4
    numsArr[4] = hash.get('u') || 0
    // 6
    numsArr[6] = hash.get('x') || 0
    // 8
    numsArr[8] = hash.get('g') || 0
    // 1 --> one,0,1,2,4三个数的英文都含有字母o，则1的个数等于字母o的个数减去数字0和2的个数
    numsArr[1] = hash.has('o')?hash.get('o') - numsArr[0] - numsArr[2] - numsArr[4]:0
    // 3 --> three, 3,8都含有字母t，则3的个数就有了
    numsArr[3] = hash.has('h')?hash.get('h') - numsArr[8]:0
    // 5 --> five, 4,5都含有字母f，则5的个数
    numsArr[5] = hash.has('f')?hash.get('f') - numsArr[4]:0
    // 7 --> seven 6,7都含有字母s，则7的个数
    numsArr[7] = hash.has('s')?hash.get('s') - numsArr[6]:0
    // 9 --> nine, 5,6,8,9都含有字母i，则9的个数
    numsArr[9] = hash.has('i')?hash.get('i') - numsArr[5] - numsArr[6] - numsArr[8]:0
    for(let i = 0; i<numsArr.length; i++){
        for(let j = 0; j < numsArr[i];j++){
            result.push(i)
        }
    }
    return result.join('') 
}
```

OK，今日算法打卡完成~~~

