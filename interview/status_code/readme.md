# 计算机网络 HTTP

- a标签 怎样点击不跳转
- 浏览器上输入 一个url后 会发生什么 状态码有什么改变

https://www.baidu.com/ 跳转到 加密的http协议https
浏览器可以读懂状态码

1. http://www.baidu.com/
res writeHead(307) Location: https://www.baidu.com/
redirect
https://www.baidu.com/

1xx  正在处理中
2xx  成功
3xx  跳转
4xx  客户端错误 404
5xx  服务器端错误 500