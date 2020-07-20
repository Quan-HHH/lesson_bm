const express = require('express');
const md5 = require('md5')

const app = express();

app.get('/big.js', (req, res) => {
    console.log('here')
    const fs = require('fs');
    const jsContent = fs.readFileSync('./big.js', 'utf-8')
    // 头字段
    // content-type
    // 强缓存 200 ok (from memory cache) 请求不会到达服务器 直接由浏览器决定是否使用缓存
    res.setHeader('Cache-Control', 'max-age=20')
    // 还有Expires 与 Cache-Control类似 但是他的时间是明确的

    // 协商缓存: 请求会到达服务器
    // 20秒之后 请求(会携带一个 If-None-Match 的字段) 到达服务器
    // 浏览器发现上一次请求 服务器有 Etag设置 浏览器会自动发送一个If-None-Match
    // Etag的生成: MD5
    const Etag = md5(jsContent);
    const oldEtag = req.headers['if-none-match'];
    if(Etag === oldEtag) {
        // 文件没有变化, 从缓存里读取就好了304 (not modified)
        res.sendStatus(304).end('');
        return;
    }
    // 还有一个Last-Modified(会携带一个 Last-Modified-Since 的字段),对比文件最后修改时间
    res.setHeader('Etag', Etag)
    res.end(jsContent)
})
app.listen(9090, () => {
    console.log(9090)
})