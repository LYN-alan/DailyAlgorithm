#### 删除排序数组中的有序数组

有序数组，不能使用额外空间，在原数组上修改数据

最优解为双指针解法

```js
function removeDuplicates(nums){
    let len = nums.length,
        i = 0;
    for(let j = 1; j < len; j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1 
}
```

