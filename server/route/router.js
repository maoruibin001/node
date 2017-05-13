/**
 * Created by lenovo on 2017/5/13.
 */
var url = require('url');
var parse = require('../parse/parser_post');
var temp = require('../static/string').staticTemp();


function router(req, cb) {
    var pathName = url.parse(req.url).pathname;
    if (pathName === '/name') {
       parse.parser(req, function(data) {
           console.log('wawawa__________________');
           console.log(data);
           cb(data.string);
       });
    } else {
        cb(temp);
    }
}
exports.router = router;