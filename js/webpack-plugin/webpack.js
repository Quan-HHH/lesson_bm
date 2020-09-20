const { SyncHook, AsyncSeriesHook } = require('tapable')
const Plugin = require('./plugin');
class Webpack {
    constructor() {
        // webpack内部 有很多 生命周期 
        this.hooks = {
            emit: new AsyncSeriesHook(), // 异步串行
            done: new SyncHook() // 同步
        }
    }
    run() {
        setTimeout(() => {
            this.hooks.emit.promise()
        }, 1000);
        setTimeout(() => {
            this.hooks.done.call()
        }, 2000);
    }
}

let options = {
    plugins: [new Plugin()]
}
let compiler = new Webpack();
for(let p of options.plugins) {
    // 插件
    p.apply(compiler);
}
// webpack一运行 所有插件都挂上来了
compiler.run()