const fs = require('fs')
exports.unlink = function(path){
    fs.stat(path, function (error, stats) {
        if (error) {
            console.log(error);
            return false;
        }
        fs.unlink(path, function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            return
        })
    })
}