/**
 * Created by lenovo on 2017/5/12.
 */
var fs = require('fs');

function getParamList(val, config) {
    var valList = val.split('=');
    if (valList[0] === config) {
        return valList[1].split(',');
    }
}
process.argv.forEach(function(val, index, array) {
    var list = getParamList(val, '--targets'),
        targets;
    if (list.length > 0) {
        console.log(list);
        targets = list;
    }
    list.forEach(function(ele, ind) {
        var url = ele || './dist'
        deleteTarget(url)
    })
});


function deleteTarget(fileUrl) {

    if (fs.statSync(fileUrl).isDirectory()) {
        var files = fs.readdirSync(fileUrl);
        var len = files.length,
            removeNumber = 0;
        if (len > 0) {
            files.forEach(function(file) {
                removeNumber += 1;
                var stats = fs.statSync(fileUrl+'/'+file);
                var url = fileUrl + '/' + file;
                if (fs.statSync(url).isDirectory()) {
                    deleteTarget(url);
                } else {
                    fs.unlinkSync(url);
                }
                // if (removeNumber === len) {
                //     console.log(removeNumber);
                //     fs.rmdir(fileUrl)
                // }
                // fs.rmdir(fileUrl);
            });
        } else {
            fs.rmdir(fileUrl)
        }
    } else {
        if (fs.statSync(fileUrl).isFile()) {
            fs.unlinkSync(fileUrl);
        }
    }
    console.log('删除完成');
}


// deleteTarget('../src/hello2.js');