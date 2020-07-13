生命周期的三个阶段:
1. 初始化渲染  render componentDidMount
2. 更新  shouldComponentUpdate render componentDidUpdate
3. 卸载  componentWillUnmount

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/?tdsourcetag=s_pctim_aiomsg

1. useState 函数组件本来是没有状态的 从这以后就有了
2. useEffect
3. useMemo 用来缓存 只能缓存值
4. useCallback 缓存的是函数