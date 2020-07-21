路由的本质?
一个/path 对应一个component 放在相应的<Route />

- router
1. react-router react-router-dom react-router-config
2. react-router 嵌套
    config routes配置一下 就清晰了
当路由比较复杂时 传统的手写router/route配置难以维护 
企业级的router配置方案react-router-config 清晰 易管理 可维护的routes/index.js配置
layout app中总有几套皮肤 匹配那个级别的所有路由
routes react-router-config renderRoutes(route.routes)
