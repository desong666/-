// if ({}) {
//   console.log({}, "为true")
// }
// ;(function fn(x) {
//   let arr = [1, 1, 1, 1]
//   console.log(x, [...arr, ...arguments])
// })(2, 3, 4)

// function partialUsingArguments(fn) {
//   let arg = [...arguments].slice(1)
//   return function () {
//     return fn.apply(this, [...arg, ...arguments])
//   }
// }
// var test = function () {
//   console.log(...arguments)
// }

// test(1, 2, 3, 4, 5)
// partialUsingArguments(test, 1, 2)(3, 4, 5)
// function valueAtBit(num, bit) {
//   let arr = num.toString(2)

//   // let res = arr.slice(8 - bit, 9 - bit)
//   // console.log(res)
//   return num.toString(2).slice(8 - bit, 9 - bit)
// }

// console.log(valueAtBit(128, 8))
eval("console.log(typeof '123')")
console.log(eval("2+3"))
console.log(eval("typeof new String(2+3)"))
console.log(String(null))
console.log(String(undefined))
// console.log(toString(null))
// console.log(toString(undefined))
// null和undefined没有toString方法
