#### 563.二叉树的坡度

##### 题目描述

> 给定一个二叉树，计算 整个树 的坡度 。
>
> 一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。
>
> 整个树 的坡度就是其所有节点的坡度之和。

##### 题解

思路---二叉树的题首先要知道它的三种遍历方法，前序遍历，中序遍历和后续遍历，本题中，节点的坡度的定义为左右子树的差的绝对值，子树的值为该节点下所有子树的值的和，由此可通过递归遍历取得左右子树的值然后相减求出绝对值，累计各个节点的层级即可得出该二叉树的坡度，代码如下

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    let result = 0
    const deep = (node) => {
        if(!node) return 0
        // 递归求出左右子树的值
        let left = deep(node.left)
        let right = deep(node.right)
        // 相减求出差的绝对值，累计起来
        result += Math.abs(left - right)
        return left + right + node.val
    }
    deep(root)
    return result
}
```

二叉树的问题很绕，有时候很容易把自己给绕进去，还是需要多多练习，加强思维逻辑，加油！！！

今日打卡完成~~~~