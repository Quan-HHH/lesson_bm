生命周期的三个阶段:
1. 初始化渲染  render componentDidMount
2. 更新  shouldComponentUpdate render componentDidUpdate
3. 卸载  componentWillUnmount

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/?tdsourcetag=s_pctim_aiomsg

1. useState 函数组件本来是没有状态的 从这以后就有了
2. useEffect 一个hook就把三个声明周期的事干完
3. useMemo 用来缓存 缓存除了函数外的东西
4. useCallback 缓存的是函数
5. useContetx 跨层级取数据
6. useRef 获取DOM对象
7. useReducer 



## 状态码
301: 永久重定向 http -> https

302: 临时重定向
需要登录权限 但是没登录 重定向到登录页面
在北京访问meituan.com -> bj.meituan.com

## relative absolute

## cors
`Access-Control-Expose-Headers`: 'Access-Control-Allow-Origin', //前端拿到的响应头数据有限 加入到这里面 前端就可以拿到
`Access-Control-Allow-Origin`: '*',
`Access-Control-Allow-Origin`: 'origin',
`Access-Control-Allow-Methods`: '*', //* 代表所有 也可以写具体的值
`Access-Control-Allow-Headers`: 'content-type, X-Requested-With',
`Access-Control-Max-Age`: -1, //preflight 缓存的时间 预检请求，缓存预检请求的结果
`Access-Control-Allow-Credentials`: true     
        // Credential凭证  允许前端请求携带cookie
    //   为true的时候 'Access-Control-Allow-Origin'不能设为*

## jsonp
