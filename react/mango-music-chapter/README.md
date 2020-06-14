1. 做react/vue项目 先仿一个音乐类的
2. 思路 架构 技能点

- react 组件由 组件component 实例 和 一个css文件组成
  下次做react项目 就直接用这个项目模板 不一定要用官方的create-react-app
  类文件大写 一个文件夹一个组件
- 单页应用 Single Page Application 只有一个页面的应用
  提升用户体验
  点击路由时 不会重新刷新 整个页面 而是根据路由的配置把相应的组件显示出来

- 头尾不动 中间内容根据Route 匹配
- Loading 组件 在整个应用中是什么地位
 在哪个目录下创建
 components 中放置的是路由级别组件
 loading 可以服务于任何listAPI 列表组件(请求数据) 通用组件

 1. 数据请求阶段 隐藏loading
 2. 数据来了后隐藏
 是否隐藏由父组件决定

 - api  分层的能力
    每个路由模块页面独立一个js文件 便于维护和代码阅读

 - 长的列表页 在移动端 支持scroll

 数据业务 封装在model里
 数据的操作 都有model层负责    分层的好处
 MVVM  Model-View-ViewModel  界面由数据驱动， 当下前端的设计模式
 MVC  Model View Contorller  后端的web开发模式