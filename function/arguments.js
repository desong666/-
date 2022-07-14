// function.arguments 属性代表传入函数的实参，它是一个类数组对象。

// 描述
// function.arguments 已经被废弃了, 现在推荐的做法是使用函数内部可用的 arguments 对象来访问函数的实参。
// 在函数递归调用的时候（在某一刻同一个函数运行了多次，也就是有多套实参），那么 arguments 属性的值是最近一次该函数调用时传入的实参，下面的示例有演示。

// 如果函数不在执行期间，那么该函数的 arguments 属性的值是 null。
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('函数退出后的 arguments 属性值：' + g.arguments);

//arguments对象
function fn1(a, b, c) {
  arguments[1] = 'new value';
  console.log(arguments);
  console.log(arguments[0]);
}
fn1(1, 2, 3);

// arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。
// 例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
function fn2(a, b, c) {
  console.log(typeof arguments);
  var args = Array.prototype.slice.call(arguments);
  var args = [].slice.call(arguments);
  var args = [...arguments];
  var args = Array.from(arguments);
  var args =
    arguments.length === 0 ? arguments[0] : Array.apply(null, arguments);
  console.log(args);
}
fn2('q', 'w', 'e');
