// var let const都可用来定义变量
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');


function handleMove(e){//e是一个形参
    // console.log('❀')
    // this一个指针
    // offsetTop获取某个dom结构到浏览器顶部的距离
    const y = e.pageY - this.offsetTop;
    //offsetHeight用来获取某dom结构的自身高度
    const percent = y / this.offsetHeight;
    // 播放速率
    const min = 0.4;
    const max = 4;
    // 四舍五入取整
    const height = Math.round(percent * 100)+ '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2)+'x';
    video.playbackRate = playbackRate;
}
// 用来监听..事件,事件名，不能随便乱写，js中支持的才能用
// handleMove函数
speed.addEventListener('mousemove', handleMove)