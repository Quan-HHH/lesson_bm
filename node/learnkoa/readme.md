Tencent 

基石？
QQ 连接一切 即时通信 TCP/IP 协议
c++, js, go, java, python

HTTP TCP/IP UDP WebSocket


- koa node web 开发框架
koa 加速了 Node web开发 一个web服务器就是一个web app
koa 在3000端口上提供了http协议访问服务
https://127.0.0.1:3000 

- http.createServer()
http是node的内置模块  createServer启动服务 是原生底层的写法
koa封装了它们 

http 协议本质是干嘛的
ctx context 上下文环境 (request response)
http 协议
http 协议诞生于1991 用于传输学术论文
采用基于请求 (ctx.request)响应(ctx.response)的模式， 在网络间传输html超文本的内容

- http(web server 应用层协议)协议基于TCP(transport Control Protocol)协议
▪ 应用层 http
    构建一个tcp连接 三次握手
▪ 表示层
▪ 会话层
▪ 传输层 tcp
▪ 网络层
▪ 数据链路层
▪ 物理层

- 建立连接后， 会发送一个GET请求行的信息
- 服务器接收到请求信息后 读取对应的HTML文件， 并将数据以ASCII码的形式返回给用户浏览器
- 断开连接



- http req + res  可以完成一次请求
http协议本质上就是一个基于请求应答模型的 传输的是最简单的html文本
ctx.req ctx.res

- writeHead 在做什么事情

- req res 之间是什么关系
   n : 1
   n 好大的话会怎么办? 高并发  node天生适合高并发(异步)
   GO 多核计算

   HTTP网络通信协议 TCP/IP 7层
   流动 node流
   建立一个通信管道(传输控制协议), stream
   关闭 断开连接 HTTP可以服务于更多用户
   释放服务器的内存

- head


- img 不显示
1. img src 向这个地址发送http请求
2. http服务