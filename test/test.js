// var main = require('./server/main')
// var rd = require('./server/random')
/*
function click() {
    console.log('click')
    main.exec(`adb shell input tap ${rd.randomFrom(1250, 1540)} ${rd.randomFrom(755, 940)}`)
    // setTimeout(back, 1000)
}
function swipe() {
    //1250,755  1540,940
    console.log('swipe')
    main.exec(`adb shell input swipe 400 800 400 0 500`)
    // setTimeout(click, 20000)
}
function back() {
    console.log('back')
    main.exec(`adb shell input keyevent 4`)
    // setTimeout(swipe, 1000)
}
function screencap() {
    var savepath = '/sdcard/screen/'
    var savename = 'screen'
    var pullpath = 'D:/Nodejs/AndroidDebugBridge/pic/'
    var pullname = 'screen'
    main.screen(savepath,savename,function(result){
        if(result == ''){
            main.pull(savepath, savename, pullpath, pullname,function(result){
                if(result == ''){
                    main.remove(savepath, savename,function(result){
                        if(result==''){
                            console.log('完成')
                        }
                        console.log(result)
                        return
                    })
                }
                console.log(result)
                return
            })
        }
        console.log(result)
        return
    })
    console.log('完成')
}
// screencap()
// main.click( rd.randomFrom(1250, 1540),rd.randomFrom(755, 940))
// var savepath = '/sdcard/DCIM/Screenshots/'
// var savename = 'screen'
// main.remove(savepath, savename, function (result) {
//     if (result == '') {
//         console.log('完成')
//     }
//     console.log(result)
// })
var savepath = '/sdcard/screen/'
var savename = 'screen'
var pullpath = 'D:/Nodejs/AndroidDebugBridge/pic/'
var pullname = 'screen'
/** 
main.screen(savepath,savename,function(result){
    if(result == ''){
        console.log('1')
    }
    console.log(result)
})

main.pull(savepath, savename, pullpath, pullname, function (result) {
    if (result == '') {
        console.log('1')
    }
    console.log(result)
})
main.remove(savepath, savename,function (result) {
    if (result == '') {
        console.log('1')
    }
    console.log(result)
})


*/

// 起点   战役列表
//0-2
const adb = require('../model/adb')

let path2 = '../img/pull/sc.png'
// /*
adb.cutPic(function(result){
    if(result == ''){
        console.log('截图完成')
        adb.pullPic(function(result){
            if (result == '') {
                console.log('发送完成')
                adb.rmPic(function (result) {
                    if(result == ''){
                        console.log('移除完成')
                        // return smli.similarity(path1,path2)
                        return
                    }else{
                        return console.log('移除失败')
                    }
                })
            } else {
                return console.log('发送失败')
            }
        })
    }else{
        return console.log('截图失败')
    }
})
// */