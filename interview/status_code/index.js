var http = require('http');

http.createServer((req, res) => {
    if(req.url == '/newpage') {
        res.writeHead(200);  //a标签不跳转
        res.end('./newpage')
        return ;
    }
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // 七层模型 物理层 数据链路层 
    res.write('Hello World');
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="/newpage">去新的页面</a>
            </body>
        </html>
    `)
})
.listen(3000)