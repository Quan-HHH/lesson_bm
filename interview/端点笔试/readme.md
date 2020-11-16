- 手写call apply bind √
- 手写数组上的各种方法 √
- 图片懒加载
    1. 加载loading图片
    <img src="./loading.jpg" lazyload="true" src-data="./1.jpg">
    <img src="./loading.jpg" lazyload="true" src-data="./2.jpg">
    <img src="./loading.jpg" lazyload="true" src-data="./3.jpg">
    2. 判断哪些图片进入视窗
    ```js
    const allImage = document.querySelector('img[lazyload]')// 得到所有图片
    let viewHeight = window.innerHeight;  // 视窗高度

    for(let img of allImage) {
        let size = img.getBoundingRect();
        if(size.top < viewHeight) {
            // 进入视窗
            // 3.
            // 4.
        }
    }
    ```
    3. 隐形加载真实图片
    ```js
    let imgObj = new Image();
    imgObj.src = img.getAttribute('data-src');
    ```
    4. 替换图片
    ```js
    // 记载完后再替换
    imgObj.onload = function() {
        img.src = img.getAttrubute('data-src');
        img.removeAttribute('lazyload');
    }
    ```
- 字符串反转