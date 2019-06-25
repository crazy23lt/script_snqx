//平均哈希算法（aHash）
/**
1.缩放图片：为了保留结构去掉细节，去除大小、横纵比的差异，把图片统一缩放到8*8，共64个像素的图片。

2.转化为灰度图：把缩放后的图片转化为256阶的灰度图。
附上灰度图相关算法（R = red， G = green， B = blue）

    1.浮点算法：Gray=R*0.3+G*0.59+B*0.11
    2.整数方法：Gray=(R*30+G*59+B*11)/100
    3.移位方法：Gray =(R*76+G*151+B*28)>>8;
    4.平均值法：Gray=（R+G+B）/3;
    5.仅取绿色：Gray=G；

3.计算平均值： 计算进行灰度处理后图片的所有像素点的平均值。

4.比较像素灰度值：遍历灰度图片每一个像素，如果大于平均值记录为1，否则为0.

5.得到信息指纹：组合64个bit位，顺序随意保持一致性即可。

6.对比指纹：计算两幅图片的指纹，计算汉明距离（从一个指纹到另一个指纹需要变几次），汉明距离越大则说明图片越不一致，反之，汉明距离越小则说明图片越相似，当距离为0时，说明完全相同。（通常认为距离>10 就是两张完全不同的图片）
 */
const cv = require('opencv4nodejs');
exports.ahash = function(path){
    let mat = cv.imread(path)
    let re1 = mat.resize(8, 8);//定宽长
    let matGray = re1.bgrToGray();//灰阶图片
    let len = matGray.sizes[0]
    let sum = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            sum += matGray.atRaw(i, j)
        }
    }
    let average = parseInt(sum / 64)
    let arr = new Array()
    for (let i = 0; i < (re1.sizes)[0]; i++) {
        for (let j = 0; j < (re1.sizes)[1]; j++) {
            if (matGray.atRaw(i, j) < average) {
                //记为0
                arr.push(0)
            } else {
                //记为1
                arr.push(1)
            }
        }
    }
    return arr
}
