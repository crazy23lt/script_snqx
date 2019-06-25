const adb = require('../model/adb')
const rd = require('../model/random')
const smli = require('../model/similarity')
const Ut = require('../model/sleep')
const num = require('../model/num')
let pick = 0
const step = async (pick) => {
    if (pick > 100) {
        return
    }
    await Ut.sleep(2500)
    adb.slide(rd.randomFrom(1561, 1772), 470, rd.randomFrom(1564, 1768), 890, 500, () => {
        console.log('拖动屏幕')
    })
    //拖动
    //机场/指挥部
    //机场补充
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(915, 964), rd.randomFrom(1077, 1136), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1532, 1879), rd.randomFrom(1048, 1164), () => {
        console.log('开始战斗')
    })
    await function (pick) {
        return step1(pick)
    }(pick)
}
const step1 = async (pick) => {
    await Ut.sleep(3300)
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(986, 1009), rd.randomFrom(259, 288), () => {
        console.log('1')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(358, 382), rd.randomFrom(483, 511), () => {
        console.log('2')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('3')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行')
    })
    await function (pick) {
        pick++;
        return step5(pick)
    }(pick)
}
const step5 = async (pick) => {
    await Ut.sleep(110000)
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(597, 631), rd.randomFrom(285, 298), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1413, 1607), rd.randomFrom(1010, 1065), () => {
        console.log('撤离')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1037, 1226), rd.randomFrom(785, 834), () => {
        console.log('撤离 确认')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(437, 535), rd.randomFrom(35, 103), () => {
        console.log('终止作战')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(640, 843), rd.randomFrom(771, 828), () => {
        console.log('重新作战 确认')
    })
    await function (pick) {
        return step(pick)
    }(pick)
}
step(pick)
