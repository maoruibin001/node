/**
 * Created by lenovo on 2017/5/13.
 */
var querystring = require('querystring');
var util = require('util');

function parser(req, cb) {
    var str = '';

    req.on('data', function(chunk) {
        console.log(chunk);
        str += chunk;
    });
    req.on('end', function() {
        var data = querystring.parse(str);
        console.log(data);
        if (data.name && data.age) {
            cb({
                code: 1,
                string: '获取到的name是：' + data.name + '；获取到的age是：' + data.age
            })
        } else {
            cb({
                code: 2,
                string: util.inspect(data)
            })
        }
    });
}
exports.parser = parser;