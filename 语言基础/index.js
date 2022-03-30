// 标签函数，通过标签函数可以自定义插值行为。。。p42
let a = 6,
  b = 9
function simpleTag(string, a, b, sum) {
  console.log(string, a, b, sum)
}

console.log(`${a}+${b}=${a + b}`)

simpleTag`${a}+${b}=${a + b}`

//原始字符串
console.log(`\u00a9`)
