const http = require('http')  //引入node 里的 http模块
const fs = require('fs') // fs文件模块

// 1.前端通过Ajax传输数据给后端 后端接受前端数据
// 2.响应数据给前端

// 当访问：127.0.0.1:8081 => 把Ajax.html 内容返回给前端
const server = http.createServer(function(req, res) {
    // req处理请求 res处理响应
    // 想获取前端给我的东西 就来req上面拿
    // 想给前端东西 就把他放到res上面
    console.log('当前正在请求', req.url)
    if (req.url.includes('search')) {
        // 代表 搜索功能 search
        res.end(req.url.split('?')[1])
        return ;
    }
    res.writeHead(200,{
        // MIME:text/html
        'Content-Type': 'text/html;charset=utf-8'
    })
    const file = fs.readFileSync('./Ajax.html', {encoding: 'utf-8'})
    res.end(file)
})

server.listen(8081, function() {
    console.log('server is running http:127.0.0.1:8081')
})