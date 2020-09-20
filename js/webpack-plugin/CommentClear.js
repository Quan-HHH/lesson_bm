// 清除注释的插件
class CommentClear {
    apply(compiler) {
        // 整个webpack只会生成一个compiler
        // emit webpack打包完资源了的这个生命周期
        // 到emit这个生命周期的时候 就往他身上挂一个任务
        compiler.hooks.emit.tapPromise('CommentClear', compilation => {
            // webpack每打包一次 都会生成一个compilation对象
            let assets = compilation.assets; // 是一个对象
            Object.keys(assets).forEach((key) => {
                let content = assets[key].source();
                console.log(content);
                content = content.replace(/\/\*\*\*\*\*\*\//g, '');
                assets[key]['source'] = () => {
                    return content;
                }
            })
        });
    }
}

module.exports = CommentClear;
