#### 两数之和
##### 题目描述
> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。

##### 示例

> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

##### 题解

思路是使用哈希表，循环数组，将target和数组每一项的差值当作key，下标当作value存入，找到符合条件的两个数字

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 哈希表算法，通过循环，把当前数字与目标数字的差作为key保存，当判断key的值存在时即找到了目标另外一个数字
    let hash = new Map()
    for(let i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            return [i, hash.get(nums[i])]
        }else{
            hash.set((target - nums[i]), i)
        }
    }
};
```

今日打卡完成！！！明日再战~~~~