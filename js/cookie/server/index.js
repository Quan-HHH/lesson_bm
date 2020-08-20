const http = require('http');
const fs = require('fs');
let count = 10000;

let sessiontable = [{
    userName: 'liming',userId: 1001, login: true, expire: '2021', id: 01
}]
// 用户的登录状态保持
// 1. 第一次登录完 后端写入一个cookie
// cookie: sessionId: 01
http.createServer((req, res) => {
    function isLogin() {
        if(req.headers['cookie']) {
            let cookie = req.headers['cookie'];
            let cookies = cookie.split(';');
            let sessionCookie = cookies.find(cookie => cookie.includes('session'));
            let [name, sessionId] = sessionCookie.split('=');
            if(sessiontable.find((item) => {
                return item.id === Number(sessionId);
            })) {
                return true;
            } else {
                return false;
            } 
        }else {
            return false;
        }
    }
    if(req.url === '/transfer') {
        if(!isLogin()) {
            res.end('un auth');
            return;
        }
        count -= 100;
        res.end('ok')
    } else if(req.url === '/count') {
        res.end(count + '')
    } else if(req.url === '/islogin') {
        if(isLogin()) {
            res.end('login');
        } else {
            res.end('not login')
        }
    } else {
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.setHeader('set-cookie', 'sessionId=01')
        res.end(html);
    }
})
.listen(9090, () => {
    console.log(9090);
})