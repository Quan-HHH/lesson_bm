const http = require('http'); //node 的内置模块
// web编程的基石 http协议
http.createServer((req, res) => {
    // req 访问者浏览器访问   res 服务器返回数据
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.end('你好')
    } else if (req.url === '/about') {
        res.end('About');
    }
    
})
.listen(1314)