const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js') // 基础配置文件
const serverConfig = { // 服务端配置文件
    target: 'node', //打包完的代码的目标平台 在node这个平台上使用
    mode: 'development', // 两个模式 development/production
    entry: './src/server/index.js', // 顺着这个入口打包
    output: {
        filename: 'bundle.js', // 输出的文件名
        path: path.resolve(__dirname, 'build'), // 输出的目录 当前目录下的build
    },
    externals: [nodeExternals()] //node 内置的模块 就没必要打包
}
// module.exports = serverConfig;
module.exports = merge(baseConfig, serverConfig); // 导出的是两份配置文件合在一起的