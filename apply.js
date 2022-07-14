// 用 apply 将数组各项添加到另一个数组

let arr = [1, 2, 3];
arr.push.apply(arr, [4, 5, 6]);
console.log(arr);

//求数组的最大值
console.log(Math.max.apply(null, arr));
