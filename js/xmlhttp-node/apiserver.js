const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    // 前端提交过来的数据一定可以通过req取到, 要返回给前端的数据一定可以通过res设置
    // 有请求进来的时候才会触发执行
    //对请求和响应的处理
    // GET 参数 url
    // POST 参数 放在实体里
    if(req.url == '/') {
        const html = fs.readFileSync('./index.html', 'utf-8') //同步方式读文件，readFile是异步
        res.end(html)

        // 后端返回的内容的类型
        // res.writeHead(200, {
        //     'content-type': 'text/html'
        // })
        // res.end(`<h2>123</h2>`)
    } else if(req.url == '/getPosts') {
        let posts = [
            {title: 'js', star: 1000},
            {title: 'php', star: 2000}
        ]
        let str = ''
        // 分段得到
        req.on('data', function(chunk) {
            str += chunk
        })
        req.on('end', function() {
            console.log(JSON.parse(str))
        })
        res.end(JSON.stringify(posts))
    }
    // console.log(req.url)
    // res.end('hello server')
})

server.listen(8080, function() {
    console.log('server is running');
})