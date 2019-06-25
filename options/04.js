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
    await Ut.sleep(3500)
    await adb.click(rd.randomFrom(334, 377), rd.randomFrom(268, 317), () => {
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
    await Ut.sleep(3000)
    await adb.click(rd.randomFrom(334, 377), rd.randomFrom(268, 317), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(334, 377), rd.randomFrom(268, 317), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(648, 670), rd.randomFrom(274, 305), () => {
        console.log('计划1')
    })
    await function (pick) {
        pick++;
        return step5(pick)
    }(pick)
}
const step5 = async (pick) => {
    await Ut.sleep(1800)
    await adb.click(rd.randomFrom(79, 215), rd.randomFrom(321, 497), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(334, 377), rd.randomFrom(268, 317), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1660, 1883), rd.randomFrom(999, 1069), () => {
        console.log('确定')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1574, 1828), rd.randomFrom(1060, 1153), () => {
        console.log('结束回合')
    })
    await Ut.sleep(19000)
    await adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(648, 670), rd.randomFrom(274, 305), () => {
        console.log('计划1')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1422, 1448), rd.randomFrom(432, 455), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1272, 1291), rd.randomFrom(272, 304), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行')
    })
    await function (pick) {
        return step6(pick)
    }(pick)
}
const step6 = async (pick) => {
    await Ut.sleep(95000)
    await adb.click(rd.randomFrom(1272, 1291), rd.randomFrom(272, 304), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1272, 1291), rd.randomFrom(272, 304), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1639, 1903), rd.randomFrom(866, 936), () => {
        console.log('补给')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1574, 1828), rd.randomFrom(1060, 1153), () => {
        console.log('结束回合')
    })
    await function (pick) {
        return step2(pick)
    }(pick)
}
const step2 = async (pick) => {
    await Ut.sleep(20000)
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(27, 231), rd.randomFrom(992, 1030), () => {
        console.log('计划模式')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1272, 1291), rd.randomFrom(272, 304), () => {
        console.log('指挥部')
    })
    await Ut.sleep(rd.randomFrom(1000, 1200))
    await adb.click(rd.randomFrom(1499, 1532), rd.randomFrom(954, 993), () => {
        console.log('计划1')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1677, 1892), rd.randomFrom(1059, 1156), () => {
        console.log('执行')
    })
    await function (pick) {
        return step3(pick)
    }(pick)
}
const step3 = async (pick) => {
    await Ut.sleep(94000)
    await adb.click(rd.randomFrom(1574, 1828), rd.randomFrom(1060, 1153), () => {
        console.log('结束回合')
    })
    await Ut.sleep(10000)
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1693, 1874), rd.randomFrom(485, 780), () => {
        console.log('结束回合')
    })
    await function (pick) {
        return step4(pick)
    }(pick)
}
const step4 = async (pick) => {
    await Ut.sleep(8000)
    await adb.click(rd.randomFrom(609, 755), rd.randomFrom(692, 718), () => {
        console.log('大冒险')
    })
    await Ut.sleep(rd.randomFrom(1300, 1500))
    await adb.click(rd.randomFrom(1618, 1804), rd.randomFrom(621, 687), () => {
        console.log('确认出击')
    })
    await function (pick) {
        return step(pick)
    }(pick)
}
step(pick)
