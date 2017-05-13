/**
 * Created by lenovo on 2017/5/11.
 */
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world222');
}).listen(8888);
console.log(2222);