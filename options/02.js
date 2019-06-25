const adb = require('../model/adb')
const rd = require('../model/random')
const smli = require('../model/similarity')
const Ut = require('../model/sleep')
const num = require('../model/num')
let pick = 1
const step = async (pick) => {
    if(pick>20){
        return
    }
    await Ut.sleep(4500)
    await adb.click(rd.randomFrom(354, 387), rd.randomFrom(170, 214), () => {
        console.log('上方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(237, 481), rd.randomFrom(966, 1009), () => {
        console.log('队伍编成')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await function (pick) {
        if (rd.chk(pick)) {
            pick++
            //偶数
            return step1(pick)
        } else {
            pick++
            //奇数
            return step2(pick)
        }
    }(pick)
}
const step1 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(1695, 1885), rd.randomFrom(1034, 1074), () => {
        console.log('第一梯队 阵型预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1837, 1901), rd.randomFrom(427, 524), () => {
        console.log('预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1387, 1726), rd.randomFrom(95, 164), () => {
        console.log('预设队伍1')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1578, 1843), rd.randomFrom(1037, 1117), () => {
        console.log('套用预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1155, 1138), rd.randomFrom(789, 844), () => {
        console.log('确认')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1856), rd.randomFrom(968, 1078), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(30, 155), rd.randomFrom(338, 402), () => {
        console.log('第二梯队')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.slide(622, rd.randomFrom(464, 700), 316, rd.randomFrom(464, 700), 500, () => {
        console.log('拖动换位')
    })
    await Ut.sleep(rd.randomFrom(2500, 2600))
    await adb.click(rd.randomFrom(60, 100), rd.randomFrom(60, 100), () => {
        console.log('返回')
    })
    await function (pick) {
        return step3(pick)
    }(pick)
    
}
const step2 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(30, 155), rd.randomFrom(338, 402), () => {
        console.log('第二梯队')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1695, 1885), rd.randomFrom(1034, 1074), () => {
        console.log('阵型预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1837, 1901), rd.randomFrom(427, 524), () => {
        console.log('预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1392, 1694), rd.randomFrom(272, 349), () => {
        console.log('预设队伍2')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1578, 1843), rd.randomFrom(1037, 1117), () => {
        console.log('套用预设')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1155, 1138), rd.randomFrom(789, 844), () => {
        console.log('确认')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1856), rd.randomFrom(968, 1078), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(32, 138), rd.randomFrom(211, 272), () => {
        console.log('第一梯队')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.slide(622, rd.randomFrom(464, 700), 316, rd.randomFrom(464, 700), 500, () => {
        console.log('拖动换位')
    })
    await Ut.sleep(rd.randomFrom(2500, 2800))
    await adb.click(rd.randomFrom(60, 150), rd.randomFrom(60, 150), () => {
        console.log('返回')
    })
    await function (pick) {
        return step4(pick)
    }(pick)
    
}
const step3 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(354, 387), rd.randomFrom(170, 214), () => {
        console.log('上方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('布置第一梯队 确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('布置第二梯队 确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1583, 1876), rd.randomFrom(1070, 1163), () => {
        console.log('开始作战')
    })
    await function (pick) {
        return step5(pick);
    }(pick)
}
const step4 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('布置第一梯队 确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(354, 387), rd.randomFrom(170, 214), () => {
        console.log('上方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('布置第二梯队 确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1583, 1876), rd.randomFrom(1070, 1163), () => {
        console.log('开始作战')
    })
    await function (pick) {
        return step5(pick);
    }(pick)
}
const step5 = async (pick) => {
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1500, 1600))
    await adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(354, 387), rd.randomFrom(170, 214), () => {
        console.log('上方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(221, 241), rd.randomFrom(443, 463), () => {
        console.log('计划点1')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(447, 468), rd.randomFrom(776, 807), () => {
        console.log('计划点2')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行计划')
    })
    await function (pick) {
        return step6(pick)
    }(pick)
}
const step6 = async (pick) => {
    await Ut.sleep(132000)
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(262, 303), rd.randomFrom(944, 988), () => {
        console.log('下方机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1413, 1607), rd.randomFrom(1010, 1065), () => {
        console.log('撤离')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1037, 1226), rd.randomFrom(785, 834), () => {
        console.log('撤离 确认')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(437, 535), rd.randomFrom(35, 103), () => {
        console.log('终止作战')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(640, 843), rd.randomFrom(771, 828), () => {
        console.log('重新作战 确认')
    })
    await function (pick) {
        return step(pick)
    }(pick)
}
step(pick)
