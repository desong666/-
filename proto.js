let shape = function () {};
console.log(shape);
let p = {
  a: function () {
    console.log('aaa');
  },
};
shape.prototype.__proto__ = p;
let circle = new shape();
console.log(circle);
circle.a(); //aaa
console.log(circle.__proto__ == shape.prototype);
