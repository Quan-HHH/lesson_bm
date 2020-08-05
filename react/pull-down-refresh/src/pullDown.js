import hammer from 'hammerjs';
export default function WebPullToRefresh() {
    var defaults = {
        bodyEl: document.body,  // 最外层盒子
        contentEl: null,        // 内容区域
        ptrEl: null,             // loading
        distance: 40,        // 滑动超过40才认为此次下拉刷新是生效的
        loadingFunction: () => {},   // 返回promise 这样就知道什么时候加载完
        resistance: 2.5       // 阻尼 手指滑动100px 元素移动 100px/2.5
    }
    function init(options) {
        options = {
            ...defaults,
            ...options,
        }
        const h = new hammer(options.contentEl);
        h.get('pan').set({direction:hammer.DIRECTION_VERTICAL});
        h.on('panstart', _panStart);
        h.on('pandown', _panDown);
        h.on('panup', _panUp);
        h.on('panend', _panEnd);
        const ptrClass = options.ptrEl.classList
        let pan = {}
        function _panStart() {
            ptrClass.add('ptr-start')
        }
        function _panDown(e) {
            console.log('pandown')
            pan.distance = e.distance / options.resistance;
            _setContentPan()
        }
        function _panUp(e) {
            pan.distance = e.distance / options.resistance;
            _setContentPan()
        }
        function _panEnd() {
            if(ptrClass.contains('ptr-refresh')) {
                _loading();
            } else {
                _reset();
            }
        }
        function _loading() {
            options.contentEl.style.transform = 
            `translate3d(0, 40px, 0)`;
            options.ptrEl.style.transform =
            `translate3d(0, 40px, 0)`;
            options.loadingFunction().then(() => {
                _reset();
            })
        }
        function _reset() {
            options.contentEl.style.transform = 
            `translate3d(0, 0, 0)`;
            options.ptrEl.style.transform =
            `translate3d(0, 0, 0)`;
        }
        function _setContentPan() {
            options.contentEl.style.transform = `translate3d(0, ${pan.distance}px, 0)`
            options.ptrEl.style.transform = `translate3d(0, ${pan.distance}px, 0)`
            if(pan.distance > options.distance) {
                ptrClass.add('ptr-refresh')
            } else {
                ptrClass.remove('ptr-refresh')
            }
        }
    }
    return {
        init
    }
}