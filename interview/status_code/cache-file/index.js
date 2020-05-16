const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // 1. 假设前端会缓存数据 localStirage sessionStorage
    // 2. a.txt 缓存一次就好
    // 3. 之后再请求 如果服务器端服务没有发生改变 就不用返回文件内容 直接使用前端缓存的
    // Q:
    // 1. 怎样区分第一次和其它次
    // 2. 怎么判断文件是否修改了
    // 3. 怎么告诉浏览器 直接使用缓存的数据
    let stat = fs.statSync('./a.txt');   //Sync 同步 阻塞
    // console.log(stat.mtime);
    if(req.headers['if-modified-since']) {
        if(req.headers['if-modified-since'] == stat.mtime) {
            res.statusCode = 304;
            res.end();
            return;
        } else {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('修改了');
            return;
        }
    }
    res.setHeader('Last-Modified', stat.mtime);
    // 下次再请求时 客户端会带上if-modified-since字段
    // fs.createReadStream('a.txt').pipe(res);
    res.end('123')
})
.listen(9090,(err)  => {
    if(!err){
        console.log(9090)
    }
})

