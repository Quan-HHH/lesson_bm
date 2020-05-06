"use strict";
// 1. 全屏
// 2. 退出全屏
// 3.是否全屏
var RFS_METHOD;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else {
    RFS_METHOD = 'msRequestFullscreen';
}
function beFull(el) {
    // el.requestFullscreen();
    el[RFS_METHOD]();
}
var btn = document.querySelector('.btn');
var box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        if (box) {
            beFull(box);
        }
    });
}
