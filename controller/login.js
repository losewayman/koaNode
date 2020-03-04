const slogin = require('../services/login')

async function login(ctx,next){
    let params = JSON.parse(ctx.request.body);
    let response=await slogin(params);
    if(response.status==200){
        console.log(ctx.session)
        ctx.session.account = params.account;
    }
    ctx.body = response; 
}

module.exports = login