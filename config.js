sqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '19980625',
    database: 'corsbi',
    port: 3306
}

sessionConfig={
    key: 'koaSession', /** (string) cookie key (default is koa:sess) */
  /** 警告:如果会话cookie被偷，这个cookie将永远不会过期 */
  maxAge: 1000*60*60*24*7,
  overwrite: true, /** (boolean) 能否覆盖 (default true) */
  httpOnly:false, /** (boolean) httpOnly或没有 (default true) */
  signed: true, /** (boolean) 签署 (default true) */
  rolling: false, /** (boolean)强制对每个响应设置会话标识符cookie。过期被重置为原始maxAge，重置过期倒计时。(默认是false) */
  renew: false,
}
module.exports = {
    sqlConfig,
    sessionConfig
}