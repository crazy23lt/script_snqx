const adb = require('../model/adb')
const rd = require('../model/random')
const smli = require('../model/similarity')
const Ut = require('../model/sleep')
const num = require('../model/num')
let pick = 1
const step = async (pick) => {
    if (pick > 17) {
        return
    }
    await Ut.sleep(3500)
    let x = rd.randomFrom(1351, 1727)
    await adb.slide(x, 470, x, 1010, 500, () => {
        console.log('拖动屏幕')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(760, 788), rd.randomFrom(882, 911), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(448, 514), rd.randomFrom(378,431), () => {
        console.log('重型机场')
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
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(491, 508), rd.randomFrom(389, 412), () => {
        console.log('重型机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(491, 508), rd.randomFrom(389, 412), () => {
        console.log('重型机场')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(749, 769), rd.randomFrom(280, 302), () => {
        console.log('计划1')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(880, 893), rd.randomFrom(583, 596), () => {
        console.log('计划2')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(749, 769), rd.randomFrom(280, 302), () => {
        console.log('计划3')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(296, 312), rd.randomFrom(680, 705), () => {
        console.log('计划4')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行')
    })
    await Ut.sleep(200000)
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
