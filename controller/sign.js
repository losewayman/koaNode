const ssign = require('../services/sign')

async function sign(ctx,next){
    let params = JSON.parse(ctx.request.body);
    let response=await ssign(params);
    
    ctx.body = response; 
}

module.exports = sign