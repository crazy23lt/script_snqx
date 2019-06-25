//取范围随机数
exports.randomFrom = function (lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
//判断奇偶
exports.chk = function (num) {
    return (num % 2 == 0) ? true : false;
}
//截取字符串前四位，并返回字符串
exports.split = function(str,index,howmany){
    var arr = str.split('');
    arr.splice(index, howmany)
    return arr.join('')
}
//递归函数优化
exports.loop = function(f){
    var active = false;
    var accumulated = [];
    return function accumulator() {
        accumulated.push(arguments);//每次将参数传入. 例如, 1 100000
        if (!active) {
            active = true;
            while (accumulated.length) {//出循环条件, 当最后一次返回一个数字而不是一个函数时, accmulated已经被shift(), 所以出循环
                f.apply(this, accumulated.shift());//调用累加函数, 传入每次更改后的参数, 并执行
            }
            active = false;
            return
        }
    };
}