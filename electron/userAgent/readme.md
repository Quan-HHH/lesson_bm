1. (window.)navigator.userAgent  用户代理
    window可省略 因为它是顶级对象 默认是全局作用域 对象都挂载在它上面
    包含浏览器的信息
    - 手机访问 or PC访问

为什么chrome 的user Agent种有 Mozilla Safari 这些？

1989 伯纳斯 李 万维网 HTTP 0.9
1990 Nexus 发布第一款浏览器 不支持图片 css img js
1993 NSCA 这款浏览器可以看到图片了 HTTP 1.0  支持不同类型的文件
 不支持iframe

1994 第一款商业浏览器 叫做Netscape 他的userAgent Mozilla   十天JavaScript 布兰登 艾奇
 支持iframe

1995 ie  win95

2002 Mozilla 第一款支持console面板的浏览器 方便前端开发者

2008 chrome V8引擎发布 它可将js的编译执行提升10倍效率 首创多进程架构、
2009 node.js 横空出世, Ryan Dahl  基于V8引擎   js可离开浏览器 单独编译并运行 非阻塞IO
    高性能 支持高并发  省机器

2011 因特尔 王文睿  将node与webkit结合
2013 出来了一个叫electron的技术 桌面exe应用
    electron = chromium (chrome的开源版本) + node + 调用系统的API
    开发快速  一份代码 在Windows mac linux 


2010 年前后 react的相关应用RN 可开发App
