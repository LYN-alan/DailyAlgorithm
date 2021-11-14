#### 677.键值映射

##### 题目描述

> 实现一个 MapSum 类，支持两个方法， insert 和 sum：
>
> - `MapSum()` 初始化 `MapSum` 对象
> - `void insert(String key, int val)` 插入 `key-val` 键值对，字符串表示键 `key `，整数表示值` val `。如果键` key` 已经存在，那么原来的键值对将被替代成新的键值对。
> - `int sum(string prefix)` 返回所有以该前缀 `prefix` 开头的键 `key` 的值的总和

##### 示例：

> 输入：
> ["MapSum", "insert", "sum", "insert", "sum"]
> [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
> 输出：
> [null, null, 3, null, 5]
>
> 解释：
> MapSum mapSum = new MapSum();
> mapSum.insert("apple", 3);  
> mapSum.sum("ap");           // return 3 (apple = 3)
> mapSum.insert("app", 2);    
> mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

##### 题解

思路：第一种想到的解法就是暴力解法，在对象里面定义一个`map`对象，`insert`方法实现为`map`对象增加`key`，`sum`方法实现为遍历`map`对象的`key`，找到符合前缀`prefix`的项累计相加，代码

```js
var MapSum = function() {
    this.keys = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.keys.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0
   for(const s of this.keys.keys()){
       if(s.startsWith(prefix)){
           sum += this.keys.get(s)
       }
   }
    return sum
};
```

第二种解法是再第一种解法上进行改进，就是再存储key的基础上，遍历key，把符合条件的前缀都存储起来，再次添加的时候，如果存在，则不更新前缀，如果不存在，则循环更新前缀，累计相加，代码

```js
var MapSum = function(){
    this.keys = new Map()
    this.prefixKeys = new Map()
}
MapSum.prototype.insert = function(key, val){
    const delta = val - (this.keys.get(key) || 0);
    this.keys.set(key, val);
    for(let i = 0; i < key.length; i++){
        const cur = key.substring(0, i);
        this.prefixkeys.set(cur. (this.prefixkeys.get(cur) || 0) + delta)
    }
}
MapSum.prototype.sum = function(prefix){
    return this.prefixkeys.get(prefix)
}
```

OK，今日打卡完成~~~~.

