1. css reset
    normalize.css
    index.css

2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中 思考好props
    - 组件的类型如果是无状态组件
        prop-types css propTypes
        形参props
        return (<div></div>)
    - props 解构出要的 prop
    - 功能函数 建议由父组件来打理 自己纯粹地负责render
        函数可以复用

3. react hooks 全新开发方式
    class Component -> function
    函数式编程
    class + constructor + 声明周期 + render -> function + creact hooks
    - useCallback 缓存函数
    - useMemo 缓存


4. 状态组件编写顺序
    - 数据

5. redux
    - 简单的redux 项目结构
     store.js  createStore reducers
        中间件 axios  redux-thunk 让redux支持异步
     reducers.js  combineReducer
     actions.js  数据请求 状态改变的触发都由actions来负责
        actionTypes 可读性
    - redux API -> 设计状态(reducer + actions)
        初始值 from to  两个reducer函数
        函数 初始值 action return初始值
        状态会怎么改变 动作的声明 SET_FROM
        - switch case
        - {type, payload} action
        - actionTypes 可读性
        - 写出actions

    - 数据组件化
        1. connect高阶返回原组件
            connect({
                mapState,
                mapDispatch
            })(Component)
        2. 创建组件
        3. 状态组件 无状态组件重用方法

    - reducer
        1. action的标准做法
        返回 {type:, payload:} 更新reducer的状态
        - 组件里的事件 生命周期等功能 主要是和数据 状态 打交道， 归为Action来做
        - action中 所有的action 使用export来返回
        - 在组件中引入需要的actions
        - 引入之后 交给bindActionCreator  变成本地调用的函数 dispatch
        - useMemo 缓存
        - connect 中第二个参数返回要的action


    1. action 
        from 北京
        to 南昌
        两个reducer函数 就有两个action
        修改的本质 redux

    - from to的复盘
        1. redux 编程思想
        - reducer是纯函数 负责返回状态 及 接受状态的修改 那一刻只有一个状态与之相对应 switch case
        - actions actionTypes 是修改reducer的使者 dispatch一个action
        from to 都有独立的reducer函数 和action
        - exchangeFromTo 拿到dispatch 和 getState