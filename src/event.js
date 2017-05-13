/**
 * Created by lenovo on 2017/5/11.
 */
var event = require('events');
var Emitter = new event.EventEmitter();
Emitter.on('you', function() {
    console.log('now, you have said, let me say');
})

// Emitter.removeAllListeners();
console.log(2222);
Emitter.on('error', function() {
    console.log(222);
})
Emitter.emit('say');
Emitter.on('say', function() {
    console.log('i have say, next you say');
    Emitter.emit('you')
});
// Emitter.emit('error');

console.log(event.EventEmitter.listenerCount(Emitter,'you'))