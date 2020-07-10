function throttled2(func, wait) {
    var previous = 0;
    var time = null;
    return function() {
        var now = new Date().getTime();
        const remain = wait - (now - previous);
        if(now - previous > wait) {
            // console.log(123)
            func();
            previous = now;
        } else if(!time) {
            time = setTimeout(() => {
                func();
                // console.log(12212121)
                time = null;
                // 时间戳只运用于头事件
                // 之后的事件 时间戳 和 timeout 是互竞的
                previous = new Date().getTime();
            }, remain);
        }
    }
}