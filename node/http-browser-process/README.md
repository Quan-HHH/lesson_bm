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

 ## 解析报文
 split('\r\n')  以这种方式切割 必须等到拿到完整报文
 现实: 报文传输的时候 是允许分段传输的

 ## 解析
 用到 状态机FSM(finite state machine)
 Infinitely: number 正无穷 负无穷
 浏览器解析报文 -> 得到一个实体body(html)  headers, 响应行

 html怎么渲染出来 浏览器也要解析html
 js怎么就被执行了 浏览器也要解析js
 解析成什么? 
 一个个单词 也就是编译原理第一步的目标


 ## 编译原理
 代码就是字符串
- 词法分析(分词): 把代码切割成 一个个最小且有效的单位
    我今天很高兴 -> 我  今天  很  高兴

- 语法分析: 抽象语法树

- 生成中间代码
- 生成目标代码(机器认识的代码)

