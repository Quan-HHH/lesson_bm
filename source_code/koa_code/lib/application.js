const http = require('http');
class MyKoa {
    constructor() {
        // super()
        console.log('koa手写')
        this.fn = undefined;
    }

    listen(...args) {
        // createServer 
        let server = http.createServer(
        //     (req, res) => {
        //     res.end('hello world')
        // }
            this.fn
        );
        server.listen(...args);
    }
    use(fn) {
        this.fn = fn;
    }
}

module.exports = MyKoa;