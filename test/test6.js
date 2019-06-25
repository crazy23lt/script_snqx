const cv = require('opencv4nodejs');
// load image from file
// const mat = cv.imread('./path/img.jpg');
// cv.imreadAsync('./path/img.jpg', (err, mat) => {

// })

// save image
// cv.imwrite('./path/img.png', mat);
// cv.imwriteAsync('./path/img.jpg', mat, (err) => {

// })

// show image
// cv.imshow('a window name', mat);
// cv.waitKey();

// load base64 encoded image
//替换
const base64text = 'data:image/png;base64,R0lGO..';//Base64 encoded string
const base64data = base64text.replace('data:image/jpeg;base64', '')
                    .replace('data:image/png;base64', '');//Strip image type prefix
//,R0lGO..
const buffer = Buffer.from(base64data, 'base64');
const image = cv.imdecode(buffer); //Image is now represented as Mat

// convert Mat to base64 encoded jpg image
const outBase64 = cv.imencode('.jpg', croppedImage).toString('base64'); // Perform base64 encoding
const htmlImg = '<img src=data:image/jpeg;base64,' + outBase64 + '>'; //Create insert into HTML compatible <img> tag

// // open capture from webcam
// const devicePort = 0;
// const wCap = new cv.VideoCapture(devicePort);

// // open video capture
// const vCap = new cv.VideoCapture('./path/video.mp4');

// read frames from capture
const frame = vCap.read();
vCap.readAsync((err, frame) => {

});

// loop through the capture
const delay = 10;
let done = false;
while (!done) {
    let frame = vCap.read();
    // loop back to start on end of stream reached
    if (frame.empty) {
        vCap.reset();
        frame = vCap.read();
    }

    // ...

    const key = cv.waitKey(delay);
    done = key !== 255;
}