<div id="root">
    <span class="demo">
        This is a span.
    </span>
    <p>DOM</p>
</div>

DOM 树     AST  Tree Abstract

{

}
把上面的HTML标签 用JSON 描述一下
对象字面量 表达能力
{
  name: '权佳欣',
  age: 20,
  sex: '女'
}


html document 之间 是什么关系？

- URL 输入 打开一个页面后 发生了什么

  download index.html 
  1. 空白页面 
  启动了一个tab 这个tab 在操作系统中 就叫做进程1(主进程) 进程是应用执行的最小单元 负责资源分配与资源调用
  2. window.url = http://127.0.0.1:5500/js/ats/index.html
  html 文档标记语言
  - tab 的主进程接收到url之后 
    启动一个网络请求 进程2 它可以拿着url去请求 在127.0.0.1:5500/js/ats/index.html 的文件
    - 渲染页面

  WEB应用是一个多进程的架构

  当我们用chrome打开页面的时候 他会启动4个进程
   应用进程(pid 资源计算及资源调用的最小单元) 负责浏览器的运行
   每个tab 负责一次页面渲染需要的 他会有一个主进程 
   下面有两个子进程 Network Service  http请求
                   GPU 计算 告诉css绘制


什么是GPU?
  GPU加速  chrome为了让页面加载更快 使用GPU来绘制页面 这也是chrome战胜IE的原因

html 文本 它的类型text/html

浏览器 将 文本 => dom对象 在内存里面
chrome 内核 v8引擎

BOM Browser Object Model
DOM Document Object Model

abstract syntax tree  抽象语法树


api  可以把所有css都选择出来   document.styleSheets

了解页面的生成过程 浏览器 操作系统中的应用 进程
html文本 转变为js document



