/**
 * Created by lenovo on 2017/5/12.
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
process.on('exit', function(code) {
    setTimeout(function() {
        console.log('i will be called');
    })
    console.log('exit', code);
})
console.log('程序运行结束');