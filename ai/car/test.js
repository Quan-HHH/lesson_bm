const fs = require('fs')
const path = require('path')

console.log(fs.readdirSync(path.join(
    process.cwd(),//process.cwd() 得到项目根目录的物理路径
    'src'
    )))