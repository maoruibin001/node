/**
 * Created by lenovo on 2017/5/13.
 */
function staticTemp() {
    var str = '<html>' +
            '<body><form method="post" action="name">姓名：<input type="text" name="name"><br/>年龄： <input type="text" name="age"><br><input type="submit" value="提交"></form></body>'+
            '</html>';
    return str;
}
exports.staticTemp = staticTemp;