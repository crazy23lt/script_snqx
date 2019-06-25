const cv = require('opencv4nodejs');
const rows = 400; // height
const cols = 400; // width
const matBGR = new cv.Mat(rows,cols, cv.CV_8UC3);//创建布垫,不填充颜色
const img1 = cv.imread('./pic/pkq.jpg')
// convert types
const matSignedInt = matBGR.convertTo(cv.CV_32SC3);
const matDoublePrecision = matBGR.convertTo(cv.CV_64FC3);

// convert color space
const matGray = img1.bgrToGray();//灰色
const matHSV = img1.cvtColor(cv.COLOR_BGR2HSV);//Hue色度，Saturation饱和度，Value 纯度
const matLab = img1.cvtColor(cv.COLOR_BGR2Lab);
// cv.imshow('matGray', matGray)
// cv.imshow('matHSV', matHSV)
// cv.imshow('matLab', matLab)
// cv.waitKey(0)

// resize
const matHalfSize = img1.rescale(0.5);//长宽减半
const mat100x100 = img1.resize(100, 100);//定宽长
const matMaxDimIs100 = img1.resizeToMax(100);//按比例 width
// cv.imshow('img1', img1)
// cv.imshow('matHalfSize', matHalfSize)
// cv.imshow('mat100x100', mat100x100)
// cv.imshow('matMaxDimIs100', matMaxDimIs100)

// extract channels and create Mat from channels
const [matB, matG, matR] = img1.splitChannels();
const matRGB = new cv.Mat([matR, matB, matG]);
cv.imshow('matRGB', matRGB)
cv.imshow('matB', matB)
cv.imshow('matG', matG)
cv.imshow('matR', matR)
cv.waitKey(0)