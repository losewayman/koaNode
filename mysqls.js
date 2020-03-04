const mysql=require("mysql");
const config = require('./config')
const pool = mysql.createPool(config.sqlConfig);

let query = function(sql,options){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,conn){
            if(err){
                reject (false)
            }else{
                conn.query(sql,options,function(err,results,fields){
                    if(err){
                        reject(false)
                    }else{
                        resolve(results)
                    }
                    conn.release();
                })
            }
        })
    })
}

module.exports=query;  