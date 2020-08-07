https://github.com/Lemoncode/react-hooks-by-example?tdsourcetag=s_pctim_aiomsg

class setState -> 父子组件props+props调用->Context->redux useContext -> mobx connect 灵感 装饰器模式
1. 当数据流动层次超过两层, 简单的useState传起来太麻烦了 而redux useReducer 太重
    如果action可以忽略 就可以使用useContext
    useState React.createContext结合 数据模板+实际操作
    useContext
2. reducer 函数是灵魂
    redux 企业级的数据状态安全流程及架构
    - state 读 可以
    - state 写 dispatch action -> reducer -> 旧新状态的切换
    - reducer 一个旧状态通过同样的type 和 payload 状态一定是一样的