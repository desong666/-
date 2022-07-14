// 浅拷贝
let arr = { x: 123 }
let arr1 = arr
arr2 = { x: 1 }
arr1.y = arr2
arr2.x = 3
console.log(arr, arr1)
