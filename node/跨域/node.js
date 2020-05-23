const http = require('http');

http.createServer((req, res) => {
    let origin = req.origin;
    res.writeHead(200, {
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin', //前端拿到的响应头数据有限 加入到这里面 前端就可以拿到
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Origin': 'origin',
        'Access-Control-Allow-Methods': '*', //* 代表所有 也可以写具体的值
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Max-Age': -1, //preflight 缓存的时间
        // 'Access-Control-Allow-Credentials': true     
        // Credential凭证  允许前端请求携带cookie
    //   为true的时候 'Access-Control-Allow-Origin'不能设为*

    //     // cookie localStorage
    //     // cookie会随着http请求头 自动发送
    // cookie 存在前端  但前后端都可以设置它 通常会和服务器会话一起用
    // 前端设置 documen.cookie = 'abc=123'
    })
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
.listen(9090, () => {
    console.log(9090);
});