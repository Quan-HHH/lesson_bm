var path = require('path');
var basePath = __dirname;
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    // 让代码兼容性更好
    entry: ["@babel/polyfill", "./app.tsx"],
    output: {
        path: path.join(basePath, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        inline: true,  // enable watch and live reload
        host: "localhost",
        port: 8080,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test:/\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBable: true,
                    babelCore: "@babel/core"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true
        })
    ]
}