/**
 * Created by lenovo on 2017/5/11.
 */
var fs = require('fs');
// var data = fs.readFile('hello2.txt', function(err, data) {
//     if (err) return console.log(err);
//     console.log(data.toString());
// });
// console.log(data);
//
// console.log(222);

// fs.rmdir('../test', function(err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('删除成功');
// })

fs.unlinkSync('./process2.js')
console.log(222);