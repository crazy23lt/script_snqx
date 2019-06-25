const jd = require('./model/judge')
let path1 = './pic/pkq.jpg'
let path2 = './pic/pkq.jpg'
function run(path1,path2){
    let num = jd.judge(path1, path2)
    if(num>10){
        console.log('图片完全不同')
    }else{
        if(num<=5){
            console.log('图片很相似')
        }else{
            console.log('图片近似')
        }
    }
} 
run(path1,path2)