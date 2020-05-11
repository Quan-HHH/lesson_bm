const fs = require('fs')

function copy(sourceUrl, destUrl) {
    // fs.readFile(sourceUrl, (err, info) => {
    //     if (!err) {
    //         fs.writeFile(destUrl, info, (err) => {
    //             if(!err) {
    //                 console.log('拷贝完毕')
    //             }
    //         })
    //     }
    // })

    // 流Stream 基类 
    // 源头
    const readSream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readSream.pipe(writeStream)
    // 这个pipe就相当于 linux中的管道操作符 |
}

// 不用流： 读完一个文件得到内容info 变量放到计算机内存中 把他写到某个地方
// 区别
// 前端
// 我： baidu.com -> html,css,js 浏览器 -> 我看到
// 浏览器执行js, 浏览器申请内存 浏览器在各自的电脑上玉兴  天然就是分布式的

// 后端
// baidu.com 1台服务器 处理 很多人的请求
copy('./readme.md', './copy.md')