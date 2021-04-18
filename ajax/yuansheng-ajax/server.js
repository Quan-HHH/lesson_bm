const express = require('express')

const app = express()

app.get('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('HELLO AJAX')
})

app.post('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('HELLO AJAX POST')
})

app.all('/server-json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: 'qjx'
  }
  res.send(JSON.stringify(data))
})

app.all('/server-json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let data = {
    name: 'qjx'
  }
  res.send(JSON.stringify(data))
})

// 延时响应
app.get('/delay', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    res.send('延时响应')
  }, 3000)
})

app.all('/axios-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {name: 'qjx'}
  res.send(JSON.stringify(data))
})

app.all('/fetch-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {name: 'qjx'}
  res.send(JSON.stringify(data))
})

app.listen(9090, () => {
  console.log('服务已在9090端口启动...')
})