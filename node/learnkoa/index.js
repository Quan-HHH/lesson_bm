// 轻量级的web开发框架
const Koa = require('koa');  // 引入koa
const app = new Koa(); // web server 一个koa的实例
const fs = require('fs')

// const func = ctx => {
//     console.log(func)
//     ctx.response.body = 'func'
// }

const main = ctx => {
    // ctx 是这一次请求的上下文环境
    console.log(ctx.request)
    // ctx.response.body = 'Hello World'
    // request response
    // 协议 操作系统(内存node 文件系统 D:) 网络 数据库
    ctx.response.type = 'html'
    const html = fs.readFileSync('./template.html', 'utf-8')
    // fs.readFile('./template.html', 'utf-8', function(err, data) {
    //     console.log(data)
    //     ctx.response.body = data
    // })
    ctx.response.body = html
}
// app.use(func); 
app.use(main); //启动了一个服务给访问者 request 用
app.listen(3000);