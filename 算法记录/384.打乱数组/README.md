#### 384.打乱数组

##### 题目描述

> 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
>
> 实现 `Solution` class:
>
> - `Solution(int[] nums)` 使用整数数组 `nums` 初始化对象
> - `int[] reset()` 重设数组到它的初始状态并返回
> - `int[] shuffle()` 返回数组随机打乱后的结果

##### 示例1

> 输入
> ["Solution", "shuffle", "reset", "shuffle"]
> [[[1, 2, 3]], [], [], []]
> 输出
> [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
>
> 解释
> Solution solution = new Solution([1, 2, 3]);
> solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
> solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
> solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]

##### 题解

思路 --- 根据题意是设计一个对象，并实现两个方法，`reset`和`shuffle`。`reset`方法实现很简单，只需要缓存一次初始化的参数即可，难点在随机打乱数组的顺序，这里我采用的方法是循环遍历数组，拿当前的数组与随机生成的之后的数字交换位置，来打乱数组的顺序。上代码：

```js
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
    this.origin = nums.slice()
};
/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin
};
/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const handleNums = this.nums.slice()
    let len = handleNums.length
    for(let i = 0; i < len; i++){
        let j = Math.floor(Math.random() * (len - i)) + i;
        [handleNums[i], handleNums[j]] = [handleNums[j], handleNums[i]]
    }
    return handleNums
}
```

OK，今日打卡成功~~~

努力~加油！！！