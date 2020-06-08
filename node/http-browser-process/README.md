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
(1. 遇到开始标签就入栈 同时把这个标签作为栈顶元素的子节点
 2. 遇到结束标签就出栈)

 DOM树: 栈

 浏览器 匹配css 规则
 效率: **按照css选择器 从后往前匹配**

- 生成中间代码
- 生成目标代码(机器认识的代码)

## layout
用 对未知产生影响的元素 计算元素的位置信息 算出坐标系里的(x, y)

## 正常的文档流
脱离文档流: float  position

## normal flow正常流
行内元素(inline-level-box): 从左往右一个接着一个布局，垂直方向默认以 baseLine 对齐
块级元素(block-level-box): 垂直方向从上往下一个接着一个布局
relative定位的元素也不会脱离文档流 

## layout
normal flow：
postion：
float: 文字环绕， 布局：几行几列
flex：

## flex 


