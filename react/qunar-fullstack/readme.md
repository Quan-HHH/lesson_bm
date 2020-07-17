- 全栈项目
    一分为二的思想
    前后端分离
    UI与redux分离
    城市数据咋做
    - cityData 初始值是null
        action-type  setCityData
    - 是否显示 isCitySelectorVisible 初始值为false
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
    - isLoadingCityData
        ACTION_SET_IS_LOADING_CITY_DATA
    
    - 后端API设计流程
        1. mongodb/mysql 写真后端
        这里选择 mockerAPI 解决了跨域问题
        2. 模块化输出API配置
        3. require一个json 或者 Mock.mock进行一个random
        这里因为是城市 选择前者进行配置

    - api -> action -> reducer -> connect -> 组件

    - 数据请求都放在actions中
        异步的action中 可以dispatch多个action