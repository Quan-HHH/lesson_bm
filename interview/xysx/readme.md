1. 属性名和值不区分大小写
    id className querySelector 大小写敏感

2. margin padding border 盒模型
    当使用内外边距 只有左右方向有效
    设置四个方向的内边距时，对于行内元素，确实显示出效果
    但是竖直方向的内边距只有效果 对其它元素没有影响
    竖直方向 外边距没有效果

3. rem em
    自适应
    media query
    vw/vh
    vm 方案如何适配
    百分比
    calc
    适配 vue/react+vw实现
    js babel
    工作流 webpack
    webpack css .styl .sass -> css-loader stylus-loader
    postcss 全新的css库 平台 插件系统
    babel-core autoprefixer 自动加前缀
    box-shadow   -webkit-box-shadow
    vue 什么东西写在哪 都规定好了
    1. 移动适配
    2. postcss
        vue内置了postcss
        .postcssrc.js
        px-tp-vw
        postcss-px-to-viewport安装


    vue init webpack vw-layout