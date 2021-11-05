/**
 *删除有序数组中的重复项 -- 循环查找
 *题解：因为是有序数组，循环数组判断相邻的项是否相等，去除相等的项
 */
function removeDuplicates(arr){
    let len = arr.length
    console.log('111')
    if(len < 2) return len
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            arr.splice(i, 1)
            i--
            // i = i < 0 ? 0: i
            console.log(arr, i)
        }
    }
    return arr.length
}

/**
 *双指针查找法
 *
 */
function removeDuplicates1(nums){
    let len = nums.length
    let i = 0
    for(let j = 1; j < len; j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

console.log(removeDuplicates1([1,1,1]))