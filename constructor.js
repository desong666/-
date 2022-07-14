// 返回创建实例对象的 Object 构造函数的引用。注意，此属性的值是对函数本身的引用，
// 而不是一个包含函数名称的字符串。对原始类型来说，如1，true和"test"，该值只可读。
//  所有的对象都会从它的原型上继承一个constructor属性
var o = {};
console.log(o.constructor === Object);

var o = new Object();
console.log(o.constructor === Object);

var a = [];
console.log(a.constructor === Array); // true

var a = new Array();
console.log(a.constructor === Array); // true

var n = new Number(3);
console.log(n.constructor === Number); // true

// 以下示例创建一个原型，Tree，以及该类型的对象，即theTree。 然后打印theTree对象的constructor属性。
function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log(theTree.constructor);

// 下面的例子展示了如何修改基本类型对象的 constructor 属性的值。只有 true, 1 和 "test" 的不受影响，
// 因为创建他们的是只读的原生构造函数（native constructors）。这个例子也说明了依赖一个对象的 constructor 属性并不安全。

function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // remains unchanged
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // remains unchanged
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  'test', // remains unchanged
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join('\n'));
