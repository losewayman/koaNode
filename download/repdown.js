const fs = require('fs');
const path = require("path");
const request = require("request");

var dirPath = path.join(__dirname, "file");
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("文件夹创建成功");
} else {
    console.log("文件夹已存在");
}
let fileName = 'WHU5IGSFIN_20200170000_01D_30S_CLK.CLK.Z';
let url = 'ftp://igs.gnsswhu.cn/pub/whu/phasebias/2020/clock/' + fileName;
function down(){
    let stream = fs.createWriteStream(path.join(dirPath, fileName));
    request(url).pipe(stream).on("close", function (err) {
        console.log("文件[" + fileName + "]下载完毕");
    });
   
}
module.exports = down