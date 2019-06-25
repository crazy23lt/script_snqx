const jd = require('./judge')
const ul = require('./unlink')

exports.similarity = function (path1, path2,callback){
    jd.judge(path1, path2, function (num) {
        if (num > 10) {
            ul.unlink(path2)
            return callback(num)
        } else {
            if (num <= 5) {
                ul.unlink(path2)
                return callback(num)
            } else {
                ul.unlink(path2)
                return callback(num)
            }
        }
    })
}