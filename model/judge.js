const ah = require('./aHash')
exports.judge = function(path1,path2,callback){
    let arr1 = ah.ahash(path1)
    let arr2 = ah.ahash(path2)
    let num = 0;
    arr1.forEach(function (item, index, arr){
        if (item !== arr2[index]){
            num++
        }
    })
    return callback(num)
}