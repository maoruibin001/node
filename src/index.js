/**
 * Created by lenovo on 2017/5/12.
 */
var server = require('./router');
var route = require('./route');
server.start(route.route);