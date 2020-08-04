1. tsx 工作流
    .tsx React组件 -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript .jsx ->babel(polyfill+env+plugin 装饰器模式) -> react DOM -> webpack-dev-server html-webpack-plugin footer script bundle.js

2. react-scripts

3. hooks 特色
    - useState
    - useEffect
    - useCallback
    - useMemo
    - useRef
    - useReducer

4. 分析react项目是如何运行的
    root
    JSX 编译过程
    - 节点的类型
        标签节点  div h4
        组件  递归
        <></>
        文本 退出条件