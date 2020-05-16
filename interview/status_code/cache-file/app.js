const http = require('http');
const fs = require('fs');
const users = require('./users.json'); //引入相对路径
console.log(users)
let version = 123456789;
let server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.createReadStream('index.html').pipe(res);
    } else if(req.url == '/users') {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        // 在这里实现一个Etag版本的更新 版本如果一样 发个304 否则 再次请求 更新版本
        res.end(JSON.stringify(users))

    }
    // if(req.headers['if-none-match']) {
    //     if(Number(req.headers['if-none-match']) == version) {
    //         res.statusCode = 304; //没有改变版本
    //         res.end;
    //         return
    //     } else {
    //         res.setHeader('Etag', version)
    //         res.end('hello world2')
    //         return
    //     }
    // }
    // res.setHeader('Etag', version)
    // res.end('hello world')
})

server.listen(3000);