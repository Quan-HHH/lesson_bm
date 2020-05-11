const https = require('https')
const fs = require('fs')


https.get('https://movie.douban.com/top250', function(res) {
//   console.log(res);
//   let html = '';
//   // 数据是分段接收到的
//   res.on('data', function(chunk) {
//     html = html + chunk;
//   })
// //   console.log(123456789);
//   res.on('end', function() {
//     // console.log(html);
//   });
    const writeStream = fs.createWriteStream('./douban.html');
    res.pipe(writeStream)
});