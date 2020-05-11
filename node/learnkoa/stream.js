const fs = require('fs');
const Koa = require('koa');
const app = new Koa()

const main = ctx => {
    console.log(ctx.request.url)
    if(ctx.request.url === '/img.jpg') {
        console.log('hhh')
        ctx.response.type = 'image';
        ctx.response.body = fs.createReadStream('./img.jpg');
    }else{ 
        ctx.response.type = 'html';  // 响应头 png js css
        // 在服务器端打开可读流, 读这个文件
        ctx.response.body = fs.createReadStream('./template.html');
    }
   
}
// const main = ctx => {
//     if(ctx.request.path !== '/') {
//         ctx.response.type = 'html';
//         ctx.response.body = '<a href="/">Index Page</a>'
//     } else {
//         ctx.response.body = 'Hello World';
//     }
// }

app.use(main)
app.listen(8080)