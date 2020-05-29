## req
浏览器: xhr fetch
node: http.get()
都是用来发HTTP请求的

不同APIxxx -> http -> 一样的HTTP处理流程

http: 超文本传输协议

```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type':'application/json')
xhr.open('POST', 'api.com', true);
xhr.send({a:1, b:2})
```
浏览器拼接报文
 报文
 - 头部
 - 首部
 - \r\n
 - 实体

