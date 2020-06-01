主题: react beer 应用开发思路整理
 beer 搜索 -> 列表 -> 点进去  创建路由

 3个路由的设计:
 搜索与列表显示可以合二为一 /search/:searchTerm (:动态参数)   /search/all  /search/8
 详情页 /beer/:beerId
 语义化设计URL

yarn add react-router-dom
1. 把应用架构搭好, 路由

