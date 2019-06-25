const adb = require('./adb')
const smli = require('./similarity')
let path2 = '../img/pull/sc.png'
exports.deal = function(path1,callback){
    adb.cutPic(function (result) {
        if (result == '') {
            adb.pullPic(function (result) {
                if (result == '') {
                    adb.rmPic(function (result) {
                        if (result == '') {
                            return smli.similarity(path1,path2,callback)
                        } else {
                            return console.log('移除失败')
                        }
                    })
                } else {
                    return console.log('发送失败')
                }
            })
        } else {
            return console.log('截图失败')
        }
    })
}
