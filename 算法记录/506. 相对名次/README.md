#### 506.相对名次

##### 题目描述

> 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。
>
> 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：
>
> - 名次第 1 的运动员获金牌 "Gold Medal" 。
> - 名次第 2 的运动员获银牌 "Silver Medal" 。
> - 名次第 3 的运动员获铜牌 "Bronze Medal" 。
> - 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
>
> 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。

##### 示例1

> 输入：score = [5,4,3,2,1]
> 输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
> 解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。

##### 示例2

> 输入：score = [10,3,8,9,4]
> 输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
> 解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。

##### 解题思路

这道题想到了两种解法，第一种是先排序得到分数排名好的数组，然后判断元素组中数据的名词和位置，另一种是通过哈希，先用哈希表把分数和位置记录下来，然后排序，在看新的排序的分数在哈希中的位置转成对应的排名，代码如下

```js
/**
 * @param {number[]} score
 * @return {string[]}
 */
// 第一种解法
var findRelativeRanks = function(score) {
    let sortArr = score.slice().sort((a,b) => b - a)
    let  TopThree = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    let result = []
    for(let i = 0; i < score.length; i++){
        let ans = sortArr.indexOf(score[i])
        ans = TopThree[ans]?TopThree[ans]:ans + 1
        result.push(ans+'')
    }
    return result
}
// 第二种解法
var findRelativeRanks = function(score) {
    let  TopThree = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    // 根据分数的长度定义好数组，和哈希
    const map = new Map(), ans = new Array(score.length);
    // 循环分数，记录分数的位置
    for(let i=0;i<score.length;i++)
        map.set(score[i], i) 
    // 排序
    score = score.sort((a,b)=>b-a)
    // 循环排序后的数组，找到之前存储的数字的位置和排序后的位置做比较，计算排名
    for(let i=0;i<score.length;i++)
        ans[map.get(score[i])] = i <= 2 ? TopThree[i] : (i + 1) + ""
    return ans
}
```

今日打卡完成！！！！

