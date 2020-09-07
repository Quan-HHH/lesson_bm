import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom'
import path from 'path';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import route from '../route'
// 如果是client客户端 ReactDom.render(, root)
// server renderToString 就是把他渲染成字符串
import Header from '../common/Header/Header.jsx';
// <Header />

const app = express();
// 把public目录映射成一个静态资源的 目录
app.use(express.static('public'))

app.get('*', (req, res) => {// get: 定义一个get形式的路由
    // const root = <Header />;
    const root = (
      <StaticRouter location={req.url}>
        { renderRoutes(route) }
      </StaticRouter>
    )
    // 把 vnode虚拟节点 -> html形式的string
    // 节点有事件 addEventListener(浏览器专用的api), 只有在浏览器端调用 才会生效
    const htmlStr = renderToString(root);
    console.log(htmlStr) 
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${htmlStr}</div>
      <script src="/index.js"></script>
    </body>
    </html>
    `)
}); 
app.listen(3000, () => {
    console.log('server is running 3000')
})