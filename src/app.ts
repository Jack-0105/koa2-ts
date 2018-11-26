import * as Koa from 'koa';

const sequelizeBase = require('./config/sequelizeBase');

//error
const onerror = require('koa-onerror');

//log
const logger = require('koa-logger');

//routes
var routers = require ('./routes/routers');

//bodyparser
const bodyparser = require('koa-bodyparser');

//json
const koajson = require('koa-json');

//jwt
const jwt = require('koa-jwt');

const app = new Koa();

//handler error
onerror(app);

app.use(koajson());

app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
  }));


app.use(logger());

// logger
app.use(async (ctx, next) => {
    const start = +new Date()
    await next()
    const ms = +new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.use(jwt({
  secret: 'jake'
}).unless({ path: [/^\/api/] }));

//routers
routers(app);

sequelizeBase();

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });

app.listen(3000);

console.log('Server running on port 3000');