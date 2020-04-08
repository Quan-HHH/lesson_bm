选择器的权重，或者说优先级
!important  1,0,0,0,0
inline-style(行内样式)  1,0,0,0
id     0,1,0,0
class  0,0,1,0    如果有11个类，权重为0,0,11,0  ,不会进位，还是id选择器权重大
标签选择器/元素选择器 0,0,0,1
* 通用选择器 0,0,0,0
从左边开始比
权重：行内>id>class>元素>*

!important 最高的
eg:
div{
    color: yellow !important
}

伪元素
div::before
div::after
div::first-line

伪类,除了伪元素的其它都是伪类
ul li:nth-child()

属性选择器: 0,0,1,0
eg:
[type="text"]{
    
}
<input type="text">


.blue{
    color:blue;
}
.red{
    color:red;
}
<div class="red blue">aaa</div>是红色

<!-- 父子 -->
.parent .child{

}
<!-- 既选.parent,又选.child -->
.parent,.child{

}
<!-- 选两个类名都有的元素 -->
.parent.child{

}
<div class="parent">
    <div class="child"></div>
</div>