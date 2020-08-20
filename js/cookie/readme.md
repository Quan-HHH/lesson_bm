## cookie
name
value
Domain: cookie生效的域
path: /a/b  /c   生效的路径
expires: 过期时间 默认就是当前  session
httpOnly: cookie只在http传输 js无法操作(cookie可以由后端的set-cookie响应头设置,也可以由前端的document.cookie=''设置)
secure: 只在https的环境下生效

<!-- cookie只要符合domain + path 的生效范围 就会随着 http 请求发送 -->
sameSite: lax/strict(cookie只在同域生效)/none\
1. 
- lax localhost 的某些get请求在zhaomeng.com发出也能带cookie
- strict localhost 的请求只有在localhost发出才会带cookie
- none localhost 的get请求不管在什么域发出都会携带cookie

2. 
csrf_token
用户登录完 服务器给你一个token
前端存起来 localstorage
之后的请求都要带这个token
这样 对于zhaomeng.com是没有这个token 它发出去没有token

3. 
浏览器给每个请求一个reffer字段 表明这个请求来源
服务器检测来源