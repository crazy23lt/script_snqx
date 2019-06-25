const adb = require('../model/adb')
const rd = require('../model/random')
const smli = require('../model/similarity')
const Ut = require('../model/sleep')
const num = require('../model/num')
var pick =1
const step = async (pick)=>{
    if(pick>=14){
        return
    }
    await Ut.sleep(4500)
    await adb.click(rd.randomFrom(940, 1040), rd.randomFrom(548, 655),()=>{
        console.log('指挥部')   
    })  
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(237, 481), rd.randomFrom(966, 1009),() => {
        console.log('队伍编成')
        console.log('--------')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await function(pick){
        if (rd.chk(pick)) {//!15/36
            pick++
            return stepM4(pick)
        } else {
            pick++
            return step15(pick)
        }
    }(pick)
}
const stepM4 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(561, 704), rd.randomFrom(456, 587),()=>{
        console.log('一梯队 二号位')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    // await adb.click(rd.randomFrom(331, 518), rd.randomFrom(205, 586), () => {
    //     console.log('1')
    // })
    // await adb.click(rd.randomFrom(610, 775), rd.randomFrom(239, 497), () => {
    //     console.log('2')
    // })
    // await adb.click(rd.randomFrom(883, 1028), rd.randomFrom(236, 490), () => {
    //     console.log('3')
    // })
    await adb.click(rd.randomFrom(1129, 1304), rd.randomFrom(233, 483), () => {
        console.log('4')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(21, 166), rd.randomFrom(331, 399), () => {
        console.log('二梯队')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(266, 460), rd.randomFrom(282, 817), () => {
        console.log('一号位')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    // await adb.click(rd.randomFrom(331, 518), rd.randomFrom(205, 586), () => {
    //     console.log('1')
    // })
    // await adb.click(rd.randomFrom(610, 775), rd.randomFrom(239, 497), () => {
    //     console.log('2')
    // })
    await adb.click(rd.randomFrom(883, 1028), rd.randomFrom(236, 490), () => {
        console.log('3')
    })
    // await adb.click(rd.randomFrom(1129, 1304), rd.randomFrom(233, 483), () => {
    //     console.log('4')
    // })
    await function(pick){
        return step2(pick)
    }(pick)
}   
const step15 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(561, 704), rd.randomFrom(456, 587), () => {
        console.log('一梯队 二号位')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    // await adb.click(rd.randomFrom(331, 518), rd.randomFrom(205, 586), () => {
    //     console.log('1')
    // })
    // await adb.click(rd.randomFrom(610, 775), rd.randomFrom(239, 497), () => {
    //     console.log('2')
    // })
    await adb.click(rd.randomFrom(883, 1028), rd.randomFrom(236, 490), () => {
        console.log('3')
    })
    // await adb.click(rd.randomFrom(1129, 1304), rd.randomFrom(233, 483), () => {
    //     console.log('4')
    // })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(21, 166), rd.randomFrom(331, 399), () => {
        console.log('二梯队')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(266, 460), rd.randomFrom(282, 817), () => {
        console.log('一号位')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    // await adb.click(rd.randomFrom(331, 518), rd.randomFrom(205, 586), () => {
    //     console.log('1')
    // })
    // await adb.click(rd.randomFrom(610, 775), rd.randomFrom(239, 497), () => {
    //     console.log('2')
    // })
    // await adb.click(rd.randomFrom(883, 1028), rd.randomFrom(236, 490), () => {
    //     console.log('3')
    // })
    await adb.click(rd.randomFrom(1129, 1304), rd.randomFrom(233, 483), () => {
        console.log('4')
    })
    await function (pick) {
        return step2(pick)
    }(pick)
}   
step(pick)
const step2 = async (pick)=>{
    await Ut.sleep(rd.randomFrom(1500, 1800))
    await adb.click(rd.randomFrom(88, 168), rd.randomFrom(66, 115), () => {
        console.log('返回')
    })
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(948, 1040), rd.randomFrom(567, 647), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(361, 453), rd.randomFrom(547, 638), () => {
        console.log('机场')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1532, 1879), rd.randomFrom(1048, 1164), () => {
        console.log('开始战斗')
    })
    await function (pick) {
        return step3(pick)
    }(pick)
}
const step3 = async (pick)=>{
    await Ut.sleep(3500)
    adb.click(rd.randomFrom(395, 425), rd.randomFrom(578, 607), () => {
        console.log('机场')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    adb.click(rd.randomFrom(395, 425), rd.randomFrom(578, 607), () => {
        console.log('机场')
    })
    await Ut.sleep(rd.randomFrom(1500, 1800))
    adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1500, 1800))
    adb.click(rd.randomFrom(968, 1025), rd.randomFrom(591, 640), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    adb.slide(rd.randomFrom(1351, 1727), 470, rd.randomFrom(1351, 1770), 1010, 500, () => {
        console.log('拖动屏幕')
    })
    await Ut.sleep(rd.randomFrom(1500, 1800))
    adb.click(rd.randomFrom(773, 813), rd.randomFrom(153, 184), () => {
        console.log('计划点4')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    adb.click(rd.randomFrom(1464, 1516), rd.randomFrom(199, 251), () => {
        console.log('计划点6')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行')
    })
    
    await function (pick) {
        return step4(pick)
    }(pick)
}
const step4 = async (pick)=>{
    // await Ut.sleep(195000)
    await Ut.sleep(200000)
    // await Ut.sleep(230000)
    await adb.click(rd.randomFrom(1692, 1848), rd.randomFrom(1085, 1141), () => {
        console.log('结束回合')
    })
    await Ut.sleep(10500)
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await function (pick) {
        return step5(pick)
    }(pick)
}
const step5 = async (pick) => {
    await Ut.sleep(4500)
    await adb.click(rd.randomFrom(1412, 1763), rd.randomFrom(553, 644), () => {
        console.log('黑色情报')
    })
    await Ut.sleep(rd.randomFrom(1200, 1500))
    await adb.click(rd.randomFrom(1061, 1222), rd.randomFrom(900, 954), () => {
        console.log('普通作战')
    })
    await function (pick) {
        return step(pick)
    }(pick)
}
/*
function step2(){
    return
    let path = '../img/push/03.png'
    let lp = rd.loop(function(){
        num.deal(path,async function(num){
            if(num<=10){
                console.log('03 pass')
                return step3()
            }else{
                console.log('03 error')
                await Ut.sleep(rd.randomFrom(2000, 2500))
                lp(1)
            }
        })
    })
    lp(1)
}
*/