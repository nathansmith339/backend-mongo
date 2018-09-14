const KoaRouter = require('koa-router');
const HTTPStatus = require('http-status');

const mongoDriver = require('../mongo/mongo-driver');

let router = new KoaRouter();

router.get('/', async(context, next) => {
    context.body = 'Hello World!';
    context.status = HTTPStatus.OK;

    await next();
});

router.get('/test', async(context, next) => {
    context.body = 'now routed to /test!';
    context.status = HTTPStatus.OK;

    await next();
});

router.get('/users', async(context, next) => {
    let query = context.request.body;

    let users = await mongoDriver.list(query);

    context.body = users;
    context.status = HTTPStatus.OK;

    await next();
});

router.post('/users', async(context, next) => {
    let query = context.request.body;

    let result = await mongoDriver.create(query);

    context.body = result;
    context.status = HTTPStatus.OK;

    await next();
});

router.get('/users/:id', async(context, next) => {
    let query = {
        _id: context.params.id
    };

    let user = await mongoDriver.getEntity(query);

    context.body = user;
    context.status = HTTPStatus.OK;

    await next();
});

module.exports = router;
