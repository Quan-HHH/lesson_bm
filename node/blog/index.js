const express = require('express')
const data = require('./db.json')
// koa是express的小孩 现有express 再有koa

const app = express();
app.get('/', function(req, res) {
    res.json(data);
})

// 设计一个URL 访问第一首诗
app.get('/posts/:id', function(req, res) {
    const id = req.params.id;
    let post = data.posts.filter(post => post.id == id);
    res.json(post)
})
// 添加一篇新文章 设计动词
app.post("/posts", )

app.listen(8080);