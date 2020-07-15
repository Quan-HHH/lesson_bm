两个相对单位
- em:  相对于自己的font-size, (`不是`相对于父元素的font-size嗷)
- rem: 相对于html的font-size
1. font-size 多少
2. 如何由设计稿快速还原

DPR: device piex ratio  
css 1px 在不同设备上面 渲染出来的像素是不一样的 2px(ip6) 3px(ipX)

想要1px:
1. meta initial-scale: 0.5 所有元素缩小到0.5
    写元素宽高的时候 按照扩大两倍之后来写
    一个元素本来是20 * 20 要写成40 * 40
    所以设计稿需要扩大两倍 这样量取的时候 量得的尺寸 就是扩大两倍之后的尺寸

2. 等比缩放
    屏幕划分为10等份
    ip6 750 / 10
    ipX 1125 / 10
    一份就是1rem -> html的font-size: 75px 或者 112.5px