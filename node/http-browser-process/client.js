// node对传参数层的封装 之前的http是对应用层的封装
const net = require('net');
class Xmlhttprequest {
    constructor() {
        this.method = null;
        this.url = null;
        this.headers = null;
        this.body = null;
        this.resStatusLine = null;
        this.resHeaders = null;
        this.response = null;

    }
    open(method, url) {
        this.method = method;
        this.url = url;
    }

    setHeader(headers) {
        this.headers = headers;
    }

    parse(string) {
        // 解析报文
        const lines = string.split('\r\n');
        this.resStatusLine = lines[0];
        this.statusCode = this.resStatusLine.split(' ')[1];
        // slice 和 splice 截取的时候 [)
        // slice 针对字符串或数组     splice 专门针对数组, 截取完还可以添加
        this.resHeaders = lines.slice(1, lines.length - 2);
        this.response = lines[lines.length - 1];
    }

    send(body) {
        // 浏览器发http请求 第一步 就是拼接http报文
        this.body = body;
        const client = net.createConnection({port: 8088, host: '127.0.0.1'}, () => {
            client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
            client.end();
        })
        client.on('data', (chunk) => {
            console.log('receive:', chunk.toString());
            this.parse(chunk.toString())
            this.onload();
        })
        client.on('end', () => {
            console.log('disconnect')
        })
    }
}
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
    'Content-Type': 'application/json'
})
xhr.onload = function() {
    console.log(xhr.statusCode);
    console.log(xhr.response);
    console.log(xhr.resHeaders);
}
xhr.send(JSON.stringify({a: 1}));


// 源端口号 和 目的端口号
// const client = net.createConnection({port: 8088, host: '127.0.0.1'}, () => {
//     let json = JSON.stringify({a: 1});
//     client.write('POST / HTTP/1.1\r\n');
//     client.write('HOST: 127.0.0.1\r\n');
//     client.write('Content-Type: application/json\r\n');
//     client.write('\r\n');
//     client.write(json);
//     client.write('\r\n');
// })

// client.on('data', (data) => {
//     console.log('receive:', data.toString());
//     client.end();
// })

// client.on('end', ()=> {
//     console.log('disconnect');
// })

