/**
 * Created by lenovo on 2017/5/12.
 */
// 输出到终端
// process.stdout.write("Hello World!" + "\n");
//
// // 通过参数读取
function getParamList(val, config) {
    var valList = val.split('=');
    if (valList[0] === config) {
        return valList[1].split(',');
    }
}
process.argv.forEach(function(val, index, array) {
    var list = getParamList(val, '--targets');
    if (list > 0) {
        console.log(list);
        ;
    }
});

// 获取执行路径
// console.log(process.platform);

// console.log(__dirname);


// console.log(process.cwd());
// console.log(__dirname);
// console.log(process.memoryUsage());
// 平台信息
// console.log(process.platform);

// console.log(process.umask());
// console.log(process.config);