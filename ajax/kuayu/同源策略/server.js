const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  // 响应一个页面
  res.sendFile(__dirname + '/index.html')
})

app.get('/data', (req, res) => {
  res.send('响应数据')
})

app.all('/jsonp-server', (req, res) => {
 const data = {
   name: 'qjx'
 }
 res.end(`handle(${JSON.stringify(data)})`)
})

app.all('/check-username', (req, res) => {
  const data = {
    exist: 1,
    msg: '用户名已经存在'
  }
  res.end(`handle(${JSON.stringify(data)})`)
 })

app.listen(9090, () => {
  console.log('服务正在启动...')
})