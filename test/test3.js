const cv = require('opencv4nodejs');
const rows = 100; // height
const cols = 100; // width
/*
// 空垫子
const emptyMat = new cv.Mat(rows, cols, cv.CV_8UC3);


// 用默认值填充Mat
const whiteMat = new cv.Mat(rows, cols, cv.CV_8UC3, [255, 255, 255]);
// cv.imshow('whiteMat', whiteMat)
const blueMat = new cv.Mat(rows, cols, cv.CV_8UC3, [255, 0, 0]);
// cv.imshow('blueMat', blueMat)
// from array (3x3 矩阵, 3 通道)
const matData = [
    [[255, 0, 0], [255, 0, 0], [255, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[255, 0, 0], [255, 0, 0], [255, 0, 0]]
];

const matFromArray = new cv.Mat(matData, cv.CV_8UC3);
cv.imshow('img', matFromArray)



// from node buffer
const charData = [0, 0, 0];
const matFromArray = new cv.Mat(Buffer.from(charData), rows, cols, cv.CV_8UC3);

*/
// Point
const pt2 = new cv.Point(100, 100);
const pt3 = new cv.Point(100, 100, 0.5);


// Vector
const vec2 = new cv.Vec(100, 100);
const vec3 = new cv.Vec(100, 100, 0.5);
const vec4 = new cv.Vec(100, 100, 0.5, 0.5);

cv.waitKey(0)