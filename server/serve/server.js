/**
 * Created by lenovo on 2017/5/13.
 */
var http = require('http');


function start(router) {
    http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        router(req, function(content) {
            res.write(content);
            res.end();
        });

    }).listen(8088);
}

exports.start = start;