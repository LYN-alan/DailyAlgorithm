#### 367.有效的完全平方数

>  题目描述
>
> 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
>
> 进阶：不要 使用任何内置的库函数，如 sqrt 。、

##### 解法

- 最简单的解法是使用内置的API ---- Sqrt,通过判断计算出来的值是否是正整数来判断是否是完全平方数

  ```js
  function isPerfectSquare(num){
      return Math.sqrt(num)%1 === 0
  }
  ```

- 第二种方式是暴力求解,通过循环来判断是否存在一个整数,它的平方等于目标数字

  ```js
  function isPerfectSquare(num){
      for(let i = 0; i < num; i++){
          if(i * i === num){
              return true
          }
      }
      return false
  }
  ```

- 第三种,二分法求解,如果一个数是完全平方数,那么它的平方根一定会在 1 - num/2 之间,然后根据中间数平方的大小来判断是向右查找还是向左查找

  ```js
  function isPerfectSquare(num){
      if(num === 0) return false
      if(num === 1) return true
      let begin = 1;
      let end = Math.floor(num /  2)
      while(begin <= end){
          let mid = begin + Math.floor((end - begin) / 2)
          let temp = mid * mid
          if(temp === num){
              return true
          }else if(temp > num){
              end = mid -1
          }else{
              begin = mid + 1
          }
      }
      return false
  }
  ```

  