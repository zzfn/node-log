const Koa = require('koa');
const fs = require("fs/promises")
const path = require("path")
const es = require('./es')

const app = new Koa();

app.use(async ctx => {
    if (ctx.request.url.startsWith("/zzf.gif")) {
        await es({...ctx.request.query, ip: ctx.headers['x-forwarded-for'] || ctx.request.ip})
        const paths = path.join(__dirname, "./zzf.gif")
        const file = await fs.readFile(paths);
        ctx.response.set("content-type", "image/gif");
        ctx.response.status = 200,
            ctx.res.write(file, 'binary')
        ctx.res.end()
    } else {
        ctx.response.body = 'Hello World';
    }
});

app.listen(9002);
