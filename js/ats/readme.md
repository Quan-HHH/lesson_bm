<div class="root">
    <span class="demo">
        This is a span.
    </span>
    <p>DOM</p>
</div>


html document 之间 是什么关系？

- URL 输入 打开一个页面后 发生了什么
  download index.html 
  1. 空白页面 
  启动了一个tab 这个tab 在操作系统中 就叫做进程1(主进程) 进程是应用执行的最小单元 负责资源分配与资源调用
  2. window.url = http://127.0.0.1:5500/js/ats/index.html
  html 文档标记语言
  - tab 的主进程接收到url之后 
    启动一个网络请求 进程2 它可以拿着url去请求 在127.0.0.1:5500/js/ats/index.html 的文件

  WEB应用是一个多进程的架构
