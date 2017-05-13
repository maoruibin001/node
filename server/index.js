/**
 * Created by lenovo on 2017/5/13.
 */
var server = require('./serve/server');
var router = require('./route/router');
server.start(router.router);