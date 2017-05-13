/**
 * Created by lenovo on 2017/5/12.
 */
var http = require('http');
var url = require('url');
function start(route) {
    http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var pathName = url.parse(req.url).pathname;
        var content = route(pathName)
        res.write(content);
        res.end();
    }).listen(8809);
}
exports.start = start;
