const router = require('koa-router')()
const clogin = require('../controller/login');
const ciflogin = require('../controller/iflogin');
const csign = require('../controller/sign');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/login', clogin)
router.post('/iflogin', ciflogin)
router.post('/sign',csign)

module.exports = router
