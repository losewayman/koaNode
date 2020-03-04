const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const schedule = require('node-schedule');
const cors = require('koa2-cors');
const session = require('koa-session');
const down = require('./download/repdown')

const index = require('./routes/index')
const users = require('./routes/users')

const config = require('./config')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// cors
app.use(cors({
  origin:function(ctx){console.log(ctx.header.origin)
    return ctx.header.origin;
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// session
app.keys = ['sdsdweedfc']
app.use(session(config.sessionConfig,app))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

function downRep(){
  // schedule.scheduleJob('30 * * * * *', function(){
  //   console.log('scheduleCronstyle:' + new Date());
  // }); 
  //down();
}
downRep();

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
