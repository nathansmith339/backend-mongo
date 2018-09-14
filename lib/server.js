const Koa = require('koa');
const app = new Koa();
const router = require('./routes/backend.router');

const PORT = 8080;

// register routes from koa-router in app
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = {
    start() {
        app.listen(PORT);
        console.log(`Server running on http://localhost:${PORT}`);
    }
};
