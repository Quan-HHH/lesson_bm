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

copy('./readme.md', './copy.md')