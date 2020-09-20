class HelloAsyncPlugin {
    apply(compiler) {
        // emit webpack打包完资源了的这个生命周期
        // 到emit这个生命周期的时候 就往他身上挂一个任务
        compiler.hooks.emit.tapPromise('HelloAsyncPlugin', compilation => {
            // return a Promise that resolves when we are done...
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    console.log('Done with async work...');
                    resolve();
                }, 1000);
            });
        });
    }
}

module.exports = HelloAsyncPlugin;
