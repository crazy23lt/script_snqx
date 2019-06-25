// CQ8432953666
// HA6629638898
// AS9487939393
const adb = require('../model/adb')
const Ut = require('../model/sleep')
// console.log(getRanNum())
    function getRanNum() {
        var result = [];
        for (var i = 0; i < 2; i++) {
            var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
            //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
            result.push(String.fromCharCode(65 + ranNum));
        }
        return result.join('');
    }

    function num() {
        var result = [];
        for (var i = 0; i < 10; i++) {
            var ranNum = Math.floor(Math.random() * 10) 
            result.push(ranNum);
        }
        return result.join('');
    }

const step = async (pick) => {
    var zm = getRanNum()
    var sz = num()
    await Ut.sleep(1000)
    await adb.click(969,643,function(){

    })
    await Ut.sleep(1000)
    await adb.jhm(zm.concat(sz),function(){

    })
    await Ut.sleep(800)
    await adb.click(1897, 499, function () {

    })
    await Ut.sleep(800)
    await adb.click(974, 767, function () {

    })
    return step()
}
step()