import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../common/Header';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
    Header.loadData().then(r => {
        const HtmlStr = renderToString(<Header />);
        console.log(HtmlStr)
        res.end(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <div id="root">${HtmlStr}</div>
                <script>window.songs = ${JSON.stringify(r.data)}</script>
                <script src="/index.js"></script>
                // 这是为了让前端的代码执行
            </body>
            </html>   
        `)
    })
})
app.listen(9090, () => {
    console.log('server is running 9090');
})