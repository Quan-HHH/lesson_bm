## SPA 单页应用
vue/react 经webpack打包完之后 就成了dist目录下的 html/css/js 静态资源
html里面只有一个空标签 <div id="root"></div>   ReactDom.render会把所有的虚拟dom渲染到root里面来
所以一访问网页是没有内容的
需要等js把所有的内容渲染到root里面 用户不能第一时间看到有价值的内容(SPA白屏时间长)

## SSR 服务器端渲染(由某种后台语言把内容渲染出去)
vue/react -> webpack -> 后端应用(node)
好处: 用户第一次访问html <div id="root">网页的内容</div> 就能看到有内容的网页

## MPA 多页应用

common
同构的思想 一份代码 两端通用
这份代码 既要在服务端运行 又要在客户端运行


webpack-merge
合并配置文件

用了babel 要装一堆依赖
cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader -D

### 同构Header.jsx这个组件
打包出来两份代码
1. 服务端 bundle.js 是一个 node 项目
2. 客户端 index.js 就是一个静态资源
3. node 服务 让组件通过 renderToString 渲染成html字符串
4. node 返回的东西就是带有内容的字符串 (缩短首屏白屏时间)
5. node 返回html结构的时候 也罢客户端的index.js返回给浏览器了, 让react组件在客户端也会渲染一次，绑定事件

### 同构路由
1. 目的 需要根据当前的url渲染页面
2. 客户端BrowserRouter
3. 服务端 手动传 req.url 告诉 StaticRouter 
4. 让页面两端都知道 用户正在访问的url 两端渲染的页面都能保持一致
？？ 鼠标点击link标签 刷新浏览器地址栏 页面由谁构造出来 哪个是客户端 哪个是服务端