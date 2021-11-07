#### 598.范围求和

##### 题目描述

> 给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。
>
> 操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。
>
> 在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数

##### 解法

对于每一次操作，给定(a, b)，我们会将矩阵中所有满足条件的位置都加1，由于a, b均为正整数，那么(0, 0)总是，满足条件，并且最终位置的值就等于操作的次数。

```js
var maxCount = function(m, n, ops){
    let minx = m;
    let miny = n;
    for(let op of ops){
        minx = Math.min(minx, op[0])
        miny = Math.min(miny, op[1])
    }
    return minx * miny
}
```

