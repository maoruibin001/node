/**
 * Created by lenovo on 2017/5/12.
 */
exports.route = function(pathName) {
    console.log('pathName is :', pathName);
    if (pathName === '/hello') {
        return 'i am hello,hahah ,and you are all not'
    } else {
        return 'you are a fuck, ' + pathName;
    }
}