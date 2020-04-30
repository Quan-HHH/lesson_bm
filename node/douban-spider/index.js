// 请求URL 得到html信息 解析html
const https = require('https');
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250', function(res) {
    // console.log(res)
    // 分段返回 要自己拼接
    let html = ''
    // 有数据产生的时候
    res.on('data', function(chunk) {
        html += chunk;
    })
    res.on('end', function() {
        // console.log(html)
        const $ = cheerio.load(html)
        let allFilms = []
        // 相当于document.querySelector
        $('li .item').each(function() {
            //  this指向循环当前的电影
            // 相当于this.querySelector
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            // 这里没有数据库 就存成一个json文件
            allFilms.push({
                title, star, pic
            })
            console.log(title,star,pic)
        })
        fs.writeFile('./films.json', JSON.stringify(allFilms),function(err) {
            if(!err){
                console.log('文件写入完毕')
            }
        })
        // 图片下载
        downloadImg(allFilms);
    })
})
function downloadImg(allFilms) {
    for(let i = 0; i < allFilms.length; i++){
        const picURL = allFilms[i].pic;
        // 请求 -> 拿到内容 -> 写入文件
        https.get(picURL, function(res) {
            // 图片是二进制编码
            res.setEncoding('binary')
            let str = ''
            res.on('data', function(chunk) {
                str += chunk
            })
            res.on('end', function() {
                fs.writeFile(`./image/${i}.png`, str, 'binary', function(err) {
                    if(!err){
                        console.log(`第${i}张图片下载成功`)
                    }
                })
            })
        })
    }
}