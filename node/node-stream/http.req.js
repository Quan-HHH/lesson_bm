const http = require('http');
const fs = require('fs')
const request = require('request');

request('https://www.baiud.com').pipe(fs.createWriteStream('./baidu.html'));
http.createServer((req, res) => {
  // 前端会将type=all&query=js 当作流的方式传过来 后端
  // GET: 数据放到url传输
  // POST: 数据放到实体传输
  console.log(req)
  const writeStream = fs.createWriteStream('./params.txt')
  // postman以post方式提交过来的数据 保存在params.txt中
  req.pipe(writeStream);
  res.end('ok');
})
.listen(8088, () => {
  console.log('8088');
})