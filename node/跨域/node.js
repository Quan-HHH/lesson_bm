const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
    //     'Access-Control-Allow-Methods': '*', //* 代表所有 也可以写具体的值
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Credentials': true     // Credential凭证  允许前端请求携带cookie
    //     // cookie localStorage
    //     // cookie会随着http请求头 自动发送
    })
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
.listen(9090, () => {
    console.log(9090);
});