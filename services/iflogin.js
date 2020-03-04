const query = require("../mysqls.js");

async function iflogin(){
    let errA = {status:0,msg:'账号不存在',data:[]};
    let errB = {status:0,msg:'密码错误',data:[]};
    let result = {status:200,msg:'成功',data:[]}
    return errA
}

module.exports = iflogin