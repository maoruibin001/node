/**
 * Created by lenovo on 2017/5/11.
 */
var Buffer = require('buffer').Buffer;
var buf1 = new Buffer('毛i love');
var buf2 = new Buffer('you')
var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.length);
console.log(Buffer.byteLength(buf3));
// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString())


//
// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer(buffer1);
// // buffer1.copy(buffer2);
// console.log("buffer2 内容: " + buffer2.toString())
//
// var obj = {name: 'mao', age: 'rui'};
// var obj2 = new Object(obj);
// console.log(obj2);
// obj.name = 20;
// console.log(obj === obj2);
// console.log(obj2);



