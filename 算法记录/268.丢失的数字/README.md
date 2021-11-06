#### 丢失的数字
##### 题目描述
> 给定一个包含[0, n]中n个数的数组，找出[0, n]这个范围内没有出现在数组中的那个数。

##### 解法

- 第一种解法：思路是先找到最大数n，就是数组的长度，然后循环，找不不存在的数字

  ```js
  var missingNumber = function(nums){
      let n = nums.length
      for(let i = 0; i <= n; i++){
          if(!nums.includes(i)){
              return i
          }
      }
  }
  ```

- 第二种解法：思路是先排序，正常情况下数组的每一个元素的下标都等于自己本身，不等于的下标就是缺失的那个

  ```js
  var missingNumber = function(nums){
      let arr = nums.sort((a,b) => a - b)
      for(let i = 0; i < arr.length; i++){
          if(arr[i] !== i){
              return i
          }
      }
      return arr.length
  }
  ```

- 第三种解法：思路是通过数学求和公式---n个连续的数字的总和是**n(n+1)/2**, 应用此公式，先算出完整数字的总和，然后求出数组的总和，两数相减就是目标数

```js
var missingNumber = function(nums){
    let n = nums.length
    let total = Math.floor(n*(n+1) / 2)
    let arrSum = nums.reduce((prev, acc) => {
        return prev + acc
    })
}
return total - arrSun
```

每日任务完成，继续努力！！！，加油！！！
