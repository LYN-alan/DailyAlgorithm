#### 移动零

##### 题解

> 给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

##### 示例

> ```js
> 输入: [0,1,0,3,12]
> 输出: [1,3,12,0,0]
> ```

##### 说明

1. 必须在原数组上操作，不能拷贝额外的数组
2. 尽量减少操作次数

##### 题解

思路是双指针循环，把不为零的数字都往前放，代码如下

第一种解法

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 双指针循环，
    // 把不为0的都往前放
    let i = 0;
    for(let j = 0; j < nums.length;j++){
        if(nums[j] !== 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
};
```

第二种解法

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 循环数组，把不为零的都放在前面，最后根据原先数组的长度补0
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== 0){
            nums[i] = nums[j]
            i++
        }
    }
    while(i < nums.length){
        nums[i++] = 0
    }
};
```

打卡，收工~~~~，希望明天来个简单的，不要打击我的了。