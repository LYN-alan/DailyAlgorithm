#### 559. N叉树的最大深度

##### 题目描述

> 给定一个 N 叉树，找到其最大深度。
>
> 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
>
> N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）
>

##### 示例1

> ![img](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)
>
> ```js
> 输入：root = [1,null,3,2,4,null,5,6]
> 输出：3
> ```

##### 示例2

> ![img](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)
>
> ```js
> 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
> 输出：5
> ```

##### 题解

思路--- 最近跟叉树干上了，连着几天都是这种，碰到叉树的题目，首先想到的就是递归求解，本题中，子节点不止一个，乃是由多个结点组成的数组，因此可分别递归每个子节点的深度，然后求出最大值，即可，上代码

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let deep = 0
    if(root.children){
        for(const childNode of root.children){
            // 遍历子节点，递归求深度
            let childDeep = maxDepth(childNode)
            // 取出子节点深度最大值
            deep = Math.max(deep, childDeep)
        }
    }
    return 1 + deep
}
```

有关树的算法还是要多学习，多练习！！！

OK,今日打卡完成~~~

