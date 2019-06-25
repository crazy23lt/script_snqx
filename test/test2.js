//OpenCV 入门：用 Node.js 进行图片处理 （译文）
const cv = require('opencv4nodejs');
// const rows = 100; // height
// const cols = 100; // width
// const emptyMat = new cv.Mat(rows, cols, cv.CV_8UC3)
// const mat = cv.imread('./pic/pkq.jpg');
// cv.imreadAsync('./pic/pkq.jpg', (err, mat) => {
//     if(err){
//         console.log(`错误:${err}`)
//         return
//     }
// })

let img1 = cv.imread('./pic/pkq.jpg')


// res1 = cv.resize(img1, None, fx = 2, fy = 1, interpolation = cv.INTER_CUBIC)

// res2 = cv.resize(img1, (int(img1.shape[1] / 2), int(img1.shape[0] / 2)), interpolation = cv.INTER_AREA)
let res1 = cv.recoverPose(img1,[8,8]).R
cv.imshow('initial', img1)
cv.imshow('large', res1)
// cv.imshow('small', res2)
cv.waitKey(0)



