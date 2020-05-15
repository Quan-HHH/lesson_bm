const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if(req.url === '/files' && req.method.toLocaleLowerCase() === 'post'){
        // 处理文件
        parseFile(req, res);
    } else{
        fs.createReadStream('./index.html').pipe(res); 
        //创建一个可读流，pipe将两个流(req,res node帮我们实现的时候本身也是流)接好 将HTML的内容返回到res上
        // 用了流之后就不用res.end()了
        // 它会自动检测流是否传输完毕 内部会处理
    }
    
})
.listen(9090, () => {
    console.log(9090)
})
function parseFile(req, res) {
    let body = ''
    let boundray = req.headers['content-type'].split('boundary=')[1];
    console.log(boundray)
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', () => {
        let lists = body.split('--' + boundray);
        for( let list of lists) {
            // 这里只写了文件的上传 本来所有信息都会上传
            let fileName = '';
            let lines = list.split('\r\n')
            if(lines[1] && lines[1].includes('filename=')) {
                let startIndex = lines[1].indexOf('filename');
                fileName = lines[1].substring(startIndex)
                // fileName = fileName
                console.log('filename', fileName);
                fs.writeFile(`./${fileName}`, lines[4], {encoding: 'binary'}, (err) => {
                    if(!err) {
                        res.end('ok')
                    } else{
                        res.end(err.toString());
                    }
                })
            }
            
        }
    })
}