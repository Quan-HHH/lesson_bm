- 昨天讲的是API

- 今天 面向业务编程
    this.state.liked  true/false html 更新
    1. 分步骤
        动态将button 添加到页面上
        方便复用 class
        既要用HTML来快速完成DOM, 又要能添加事件
        1. 要dom节点对象
        2. innerHTML

- js this指向
this 动态决定, 在每个函数里面都有this ,这是一个指针
具体指向谁？由它的调用方式决定
1. 作为对象的方法调用， 指向对象本身
2. 作为事件函数， this指向事件发生的元素
    bind 可以强行绑定函数内部的this，bind不会立即执行
    call立即执行

- 封装 class 复用
    constructor 申明属性 this.state
    render() 渲染到页面
    changeLikeText()

    class LikeButton {
        constructor() {

        }
        render() {

        }
        changeLikeText() {

        }
    }

createDOMFromString 为什么要写到外面？
createDOMFromString不属于LikeButton类