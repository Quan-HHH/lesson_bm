# 什么是 XSS 攻击? 如何防范XSS攻击? 什么是CSP?
攻击者想尽一切办法将一段可执行的代码注入到网页中

xss类型:
 - 持久性
    攻击者的代码被服务端写进了数据库

 - 非持久性
    <!-- http://www.baidu.com?name=<script>alert(1)</script> -->


# 防范:
 - 转义字符

 function escape(str) {
     str = str.replace(/&/g, '&amp;')
     str = str.replace(/</g, '&lt;')
     str = str.replace(/>/g, '&gt;')
     str = str.replace(/"/g, '&quto;')
     str = str.replace(/'/g, '&#39;')
     str = str.replace(/`/g, '&#96;')
     str = str.replace(/\//g, '&#x2F;')
     return str
 }

 <!-- <script>alert(1)</script> -->
 <!-- &lt;script&gt;alert(1)&lt;&#x2F;script&gt; -->

 const xss = require('xss');
 let html = xss('<h1>XSS Demo</h1>')
 <!-- 将这些标签加入白名单 输出当中会保留此处列出的这些标签 -->

 # CSP
 开发者告诉浏览器 哪些外部资源是可以加载和执行的 如何拦截是由浏览器自己实现的

 通常有两种方式开启CSP:
  1. 设置HTTP Header中的 Content-Security-Policy
  2. 设置 meta 标签 <metahttp-equiv="Content-Security-Policy">