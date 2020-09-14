## react学习

- JSX JavaScript和XML  可以在react的javascript里面写html代码
    当遇到 < 就当html解析
    当遇到 { 就当js解析


- setState不能直接对state进行操作，因为他会对前后两个state进行Object.is的比较， 如果是true, 则不会重新渲染


- 单向数据流
    父组件向子组件传值 子组件对该值只读 不可以改变


- 生命周期 react中 在某一时刻 能自动执行的函数