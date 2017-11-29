const Koa = require('koa')
const app = new Koa();

const path = require('path');
const fs = require('fs');

const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

if (process.env.NODE_ENV === 'test') {
  const toDelete = handlers.indexOf('03-logger.js')
  handlers.splice(toDelete, 1)
}

handlers.forEach(handler => require('./middlewares/' + handler).init(app));

const Router = require('koa-router');
const router = new Router();

router.get('/', require('./routes/home').get);
router.post('/', require('./routes/home').post)

app.use(router.routes());

module.exports = app