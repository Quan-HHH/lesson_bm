## http 协议
应用层上的一个协议
fe <=> http <=> rd        前后端数据传输
两方传输数据 都要遵守http协议

## Ajax 
无需重新加载整个网页的情况下， 能够更新部分网页的技术

## 同步
一行接着一行执行

## 异步
代码书写的顺序 并不是执行的顺序

## node
- js chrome: v8 解释执行js
- 页面渲染
- 发送网络请求

后来 把浏览器中v8引擎 单独拿到服务端 形成node



http://127.0.0.1:5500/js/ajax-http/Ajax.html
http://localhost:5500/js/ajax-http/Ajax.html

127.0.0.1 IP
等同
localhost 域名
域名是为了方便人们记忆


端口存在的目的:
一台服务器 运行很多东西
port区别每个应用


## http
- 请求行
    - 方法: GET/POST
    - url: juejin.com?query=js
    - 版本

- 首部: 
    - 一个个的键值对key: value
    - Content

- 实体
    - 传输的具体数据