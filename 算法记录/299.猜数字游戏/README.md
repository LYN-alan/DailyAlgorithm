#### 299.猜数字游戏

##### 题目描述

> 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
>
> 写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：
>
> 猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls", 公牛），
> 有多少位属于数字猜对了但是位置不对（称为 "Cows", 奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
> 给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。
>
> 提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。
>
> 请注意秘密数字和朋友猜测的数字都可能含有重复数字。
>

##### 示例

> 输入: secret = "1807", guess = "7810"
> 输出: "1A3B"
> 解释: 数字和位置都对（公牛）用 '|' 连接，数字猜对位置不对（奶牛）的采用斜体加粗标识。
> "1807"
>   |
> "7810"

##### 题解思路

使用hash空间来解，分别定义两个map结构，然后对数字字符串进行循环，将位置和数字都相同的数字个数记录下来，累计就得到了公牛的数量，对不相等的数字处理：放入map结构中，遇到重复数字则累计叠加，最后求出在两个map中都存在的数字的最小次数，相加就等到奶牛的个数

```js
var getHint = function(secret, guess) {
    let BullsM = new Map()
    let CowsM = new Map()
    let Bulls = 0, Cows = 0;
    let n = secret.length
    for(let i = 0; i < n; i++){
        let s = secret.charAt(i);
        let g = guess.charAt(i);
        if(s === g){
            Bulls++
        }else{
            if(BullsM.has(s)){
                BullsM.set(s, BullsM.get(s) + 1)
            }else{
                BullsM.set(s, 1)
            }
            if(CowsM.has(g)){
                CowsM.set(g, CowsM.get(g) + 1)
            }else{
                CowsM.set(g, 1)
            }
        }
    }
    for(const key of BullsM.keys()){
        if(CowsM.has(key)){
            Cows += Math.min(BullsM.get(key), CowsM.get(key))
        }
    }
    return `${Bulls}A${Cows}B`
};
```

打卡，收工！！！