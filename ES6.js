//关于es6解构赋值

//1.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, b, c } = obj;

//2.换个属性名解构赋值

const { a: a1 } = obj;

//3.提示 解构的对象不能为undefined null

const { a: a2 } = obj || {};

//关于合并数据

//1.合并数组
const a3 = [1, 2, 3];
const b3 = [2, 3, 4];
const c3 = [...new Set([...a3, ...b3])];
console.log(c3);

//2.合并对象
const obj1 = { a: 1 };
const obj2 = { b: 1 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//关于if判断条件
const arr = [1, 2, 3, 4];
var type;
if (arr.includes(type)) {
}

//关于遍历对象多维数组

const arr1 = {
  a: [2],
  b: [[4, [[[[1]]]]], []],
};
let res = Object.values(arr1).flat(Infinity);
console.log(res);
//flat不支持IE浏览器

//关于获取对象属性值
const name = obj && obj.name;
//优化
const name1 = obj?.name;

//关于输入框非空的判断
//示例
let value = '';
if (value !== null && value !== undefined && value !== '') {
}
//优化,使用空值合并运算符
if (value ?? '' !== '') {
}
