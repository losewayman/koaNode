const query = require("../mysqls.js");

async function sign(params){
    let errA = {status:0,msg:'账号已存在',data:[]};
    let result = {status:200,msg:'注册成功',data:[]}
    let {account,password} = params;
    let response = await query("select * from user where account = ?",[account]);
    if(response.length>=1){
        return errA;
    }else{
        let response = await query("insert into user (account,password) values(?,?)",[account,password]);
        if(response){
            return result;
        }
    }
}

module.exports = sign
