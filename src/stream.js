/**
 * Created by lenovo on 2017/5/12.
 */
var fs = require('fs');
var zlib = require('zlib');
// var readStream = fs.createReadStream('./hello.txt');
// var writeStream = fs.createWriteStream('./txt/hello3.txt.zip');
// writeStream.on('error', function(e) {
//     console.log(e.stack);
// })
// readStream
//     .pipe(zlib.createGzip())
//     .pipe(writeStream);
//
// var readStream = fs.createReadStream('./txt/hello3.txt.zip');
// var writeStream = fs.createWriteStream('./txt/hello.txt');
// readStream.pipe(zlib.Gunzip()).pipe(writeStream);
// writeStream.end();

var data = ''
for (var i = 0;i < 100000; i ++) {
    data += '我是谁，i don\'t know';
}
var ws = fs.createReadStream('./txt/output.txt');
var t = 0;
ws.on('data', function(data) {
    console.log(data.length);
    console.log(2222);
});
// ws.end();

ws.on('finish', function() {
    console.log(arguments);
    console.log('写入完成');
})

console.log('hello', Math.pow(2, 16));


