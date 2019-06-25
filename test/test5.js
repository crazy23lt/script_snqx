// matBGR.set(50, 50, new Vec(255, 0, 0));
const cv = require('opencv4nodejs');
const rows = 400; // height
const cols = 400; // width
const matBGR = new cv.Mat(rows, cols, cv.CV_8UC3,[0,0,0]);
const matGray = new cv.Mat(rows, cols, cv.CV_8UC1,);
const img1 = cv.imread('./pic/pkq.jpg')
// cv.imshow('img', matBGR)
// cv.waitKey(0)
// get pixel value as vector or number value 
// 获取像素值作为矢量或数值
const vec3 = img1.at(200, 100);
//vec3:{"z":255,"y":216,"x":157}
const grayVal = img1.at(200, 100);
//grayVal:{"z":255,"y":216,"x":157}

// set single pixel values
// 设置单像素值
img1.set(200, 100, [0, 0, 0])
matGray.set(50, 50, 255);
// get raw pixel value as array
// 获取原始像素值作为数组
const [b, g, r] = img1.atRaw(200, 100);
console.log([b, g, r])






// get a 25x25 sub region of the Mat at offset (50, 50)
//在偏移量(50,50)处得到垫子的25x25次区域 截取
const width = 25;
const height = 25;
const region = img1.getRegion(new cv.Rect(50, 50, width, height));
// cv.imshow('region', region)
// get a node buffer with raw Mat data
const matAsBuffer = matBGR.getData();

// get entire Mat data as JS array
const matAsArray = region.getDataAsArray();
console.log(matAsArray)
cv.waitKey(0)