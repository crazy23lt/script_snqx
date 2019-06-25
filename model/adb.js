var process = require('child_process');
function exec(shell,callback) {
    process.exec(shell, function (error, stdout, stderr) {
        if (error !== null) {
            callback(error,null);
        }
        callback(null, stdout);
    });
}
exports.click = function(x,y,callback){
    exec(`adb shell input tap ${x} ${y}`,
        function(error,result){
            if(error !== null){
                return console.error('error: ' + error);
            }
            callback()
        }
    )
}
exports.slide = function(x1,y1,x2,y2,time,callback){
    exec(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${time}`,
        function (error, result) {
            if (error !== null) {
                console.error('error: ' + error);
                return;
            }
            callback()
        }
    )
}
exports.execOut = function(){
    let path = 'D:/Nodejs/AndroidDebugBridge/img/pull/sc.png'
    exec(`adb exec-out screencap -p > ${path}`,
        function (error, result){
            if (error !== null) {
                console.error('error: ' + error);
                return;
            }
            console.log('stdout: ' + result);
    })
}
exports.cutPic = function(callback){
    exec(`adb shell screencap -p /sdcard/sc.png`, function (error, result){
        if (error !== null) {
            console.error('error: ' + error);
            return;
        }
        callback(result)
    })
} 
exports.pullPic = function (callback) {
    exec(`adb pull /sdcard/sc.png D:/Nodejs/AndroidDebugBridge/img/pull/sc.png`, function (error, result) {
        if (error !== null) {
            console.error('error: ' + error);
            return;
        }
        callback(result)
    })
} 
exports.rmPic = function (callback) {
    exec(`adb shell rm /sdcard/sc.png`, function (error, result) {
        if (error !== null) {
            console.error('error: ' + error);
            return;
        }
        callback(result)
    })
} 
exports.jhm = function (jhm,callback) {
    exec(`adb shell input text ${jhm}`, function (error, result) {
        if (error !== null) {
            console.error('error: ' + error);
            return;
        }
        callback(result)
    })
} 
exports.ENTER = function (callback) {
    exec(`adb shell input keyevent 66`, function (error, result) {
        if (error !== null) {
            console.error('error: ' + error);
            return;
        }
        callback(result)
    })
} 