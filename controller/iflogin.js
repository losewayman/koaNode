const siflogin = require('../services/iflogin')

async function iflogin(ctx,next){
    console.log('gg',ctx.session.account)
    if(ctx.session.account){
        ctx.body = {
            status:200,
            account:ctx.session.account
        }
    }else{
        ctx.body = {
            status:0
        }
    }
    // let response=await siflogin();
    // ctx.body = response; 
}

module.exports = iflogin