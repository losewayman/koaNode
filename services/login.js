const query = require("../mysqls.js");

async function login(params){
    let {account,password} = params;
    let response = await query("select * from user where account = ?",[account]);
    let errA = {status:0,msg:'账号不存在',data:[]};
    let errB = {status:0,msg:'密码错误',data:[]};
    let result = {status:200,msg:'登录成功',data:[]}
    if(response.length>=1){
        if(response[0].password===password){
            return result;
        }else{
            return errB;
        }
    }else{
        return errA;
    }
}

module.exports = login
