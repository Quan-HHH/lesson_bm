## 
我们的网页是沿着一条Z轴排开的

## 层叠上下文的形成(z-index调整的就是层叠上下文)
1. position不为static
2. filter transform perspective 不为none
3. will-change


## layers
1. 与层叠上下文的共同点: 顺序 都是z轴
2. transform: translate3d 
    will-change 
    perspective
    video
    backface-visibility 为 hidden
    animation 动画开始后(未开始或结束后layers失效)
(可以认为layers是层叠上下文的一种特殊情况)

对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）

## js -> relayout -> repaint -> composite(合成) -> GPU

## 提升layers的好处
- 当前这个layers变化不会影响其它layers
- 对于 transform、opacity产生变化了 不会经过relayout repaint