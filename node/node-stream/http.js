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

https.get('https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp', function(res) {
    // res.setEncoding('binary')
    // let str = ''
    // res.on('data', function(chunk) {
    //     str += chunk
    // })
    // res.on('end', function() {
    //     fs.writeFile(`./image/${i}.png`, str, 'binary', function(err) {
    //         if(!err){
    //             console.log(`第${i}张图片下载成功`)
    //         }
    //     })
    // })
    const writeStream = fs.createWriteStream('./img.jpg')
    res.pipe(writeStream)
})

