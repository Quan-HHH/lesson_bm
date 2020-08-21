const koa = require('koa');
const KoaViews = require('koa-views');
const Router = require('koa-router')
const path = require('path') // 相对路径转绝对路径

const app = new koa();
app.use(KoaViews(path.resolve(__dirname, './views'), {
    extension: 'ejs' // 模板引擎
}));
// 存储型
let dataFromDB = `<iframe src="http://www.baidu.com"></iframe>`;
function html_encode(s) {
    s = s.replace('<', '&lt;')
    s = s.replace('>', '&gt;')
    return s;
}
const router = Router();
router.get('/', async(ctx) => {
    const { xss } = ctx.query
    await ctx.render('index', {
        username: 'fffflower',
        xss: xss ? html_encode(xss) : '',
        dataFromDB: html_encode(dataFromDB)
    })
})
app
.use(router.routes())
.use(router.allowedMethods())

app.listen(9090, () => {
    console.log(9090)
})