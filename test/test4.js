const cv = require('opencv4nodejs');
const rows = 100; // height
const cols = 100; // width
const mat0 = new cv.Mat(rows, cols, cv.CV_8UC3, [0, 0, 0]);
const mat1 = new cv.Mat(rows, cols, cv.CV_8UC3, [255, 255,255]);
console.log(mat0)
// cv.imshow('img', mat0)
// arithmetic operations for Mats and Vecs  mat和Vecs的算术运算
const matMultipliedByScalar = mat0.mul(0.5);  // scalar multiplication 标量乘法

// cv.imshow('img', matMultipliedByScalar)
const matDividedByScalar = mat0.div(2);       // scalar division 标量除法
const mat0PlusMat1 = mat0.add(mat1);          // addition   加法

const mat0MinusMat1 = mat0.sub(mat1);         // subtraction    减法

const mat0MulMat1 = mat0.hMul(mat1);          // elementwise multiplication 基础乘法

const mat0DivMat1 = mat0.hDiv(mat1);          // elementwise division   基础除法


// logical operations Mat only  
const mat0AndMat1 = mat0.and(mat1);
console.log(mat0AndMat1)

const mat0OrMat1 = mat0.or(mat1);
const mat0bwAndMat1 = mat0.bitwiseAnd(mat1);
const mat0bwOrMat1 = mat0.bitwiseOr(mat1);
const mat0bwXorMat1 = mat0.bitwiseXor(mat1);
const mat0bwNot = mat0.bitwiseNot();
cv.imshow('img', mat0AndMat1)
cv.waitKey(0)