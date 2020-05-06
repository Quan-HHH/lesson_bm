// 1. 全屏
// 2. 退出全屏
// 3.是否全屏

// 联合类型
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' | 'msRequestFullscreen';
// DOM这个库没有定义一下方法 需要自己定义
interface Element {
    requestFullscreen(): any,
    webkitRequestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any,
}
let RFS_METHOD: RFSmethods;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen'
} else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen'
} else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen'
} else {
    RFS_METHOD = 'msRequestFullscreen'
}
function beFull(el: Element) {
    // el.requestFullscreen();
    el[RFS_METHOD]();
}
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        if (box) {
            beFull(box);
        }
    })
}


