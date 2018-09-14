const Koa = require('koa');
const app = new Koa();

const PORT = 8080;

// Send a response to GET requests on route '/'
app.use(context => {
    let message = 'Hello World!';
    context.body = message;
});

app.listen(PORT);

console.log(`Server running on http://localhost:${PORT}`);
