## 跨域
浏览器的安全策略  只有在浏览器才有这个限制 服务端是没有跨域这个限制的

1. 一个源向另一个源发生请求的时候
同源: 同协议(http/https) 同域名 同端口
两个源不同：产生跨域

CORS: cross origin resource share

前后端分开部署: 前端有自己的域名 后端也有自己的域名

解决:
1. Access-Control-Allow-Origin

## http 头
请求头: accept
响应头: Set-Cookie

通用头:前后端都可以设置
 Content-Type
 - 前端请求的时候带给后端内容的类型: (3种)  www-url..., text/plain, formdata
 - 后端告诉前端 我给的资源的类型:MIME

## 简单请求 
跨域直接发出请求

## 非简单请求
 - OPTIONS prelight   /api
 - POST  /api

 ## JSONP
 img link script 这些标签 不同于xhr fetch 它们可以引入外部的资源 不受跨域的限制
 jsonp借助script的特性来实现的