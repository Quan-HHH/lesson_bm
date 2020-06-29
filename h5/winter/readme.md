语义化
1. html5语义化标签
    结构相关
    header + footer
    1. aside + article (main/content)

    2. nav + ol > li(有序列表)

    3. hgroup
    <hgroup>
        <h1>Welcome to my WWF</h1>
        <hr/>  不是两个独立的区块 所以不用</hr> 直接用border-bottom
        <h2>For a living planet</h2>
    </hgroup>

    4. <abbr title="World Wide Web ">WWW</abbr>
    5. figure
    <figure> 标签规定独立的流内容（图像、图表、照片、代码等等）。
    <figure> 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。

    6. 