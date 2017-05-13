/**
 * Created by lenovo on 2017/5/12.
 */
var util = require('util');
// function Parent (name) {
//     this.name = name;
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }
// Parent.prototype.showName = function() {
//     console.log(this.name);
//
// }
// function Child(name) {
//     this.name = name;
// }
// util.inherits(Child,Parent)
// var parent = new Parent('mao');
//
// var child = new Child('rui');
// // console.log(child);
// // child.showName();
//
// console.log(typeof util.inspect(parent));

var arr = [];
console.log(Array.isArray(arr));
console.log(util.isArray(arr));