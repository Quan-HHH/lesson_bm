- 博客网站
    React 做UI 组件化思维 
    - 列表
    - 详情页
    - 评论
    node做后端 后台数据库 MySQL? mongodb
    后台数据库怎样向应用提供数据呢？
    - 爬取 cherrio 
    - MVC  Model(Mysql)-View(React)-Controller(Node)
    可以实现增删改查 但不想启用SQL
    - 简单服务的话 json文件作为资源 代替数据库
    使用json-server来启动它 restful api 格式


    /posts/show/1 看某篇文章的url 有什么问题
    - 不能有动词 那么show的概念由谁表达   / GET 

    设计一个URL 从账户1 向账户2汇款520元 如何设计？
    × /accounts/:1/transfer/:520/to/:2
    restful 动词 + url(不能有动词)
    /transaction 转账 POST
    {from: 1, to: 2, amount:520.00}
    Restful 是后端在设计URL 的国际规范

JSON是数据格式 是前后端数据交流的标准格式


yarn add json-server
.\node_modules\.bin\json-server --watch db.json --port 3300

把.\node_modules\.bin\json-server --watch db.json --port 3300添加到package.json 可以直接npm run json-server