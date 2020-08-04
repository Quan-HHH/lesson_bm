## GET POST
一个是req body 一个是 querstring(a=1&b=2)

从协议本身来看 并没有限制GET传递参数不能放到body
POST传递参数也可以放到querstring

一个url由哪些部分组成

- GET资源可以缓存 POST资源一般不能缓存
- GET请求 url 长度有限(是浏览器限制的), post req body 不限制
- 相对来说,GET不安全，POST更安全。但其实都是不安全的 http明文传输 要更安全的话 用https