const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.css$/i,
                use: ['style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[hash:base64:5]'
                        }
                    }
                }],
                // css-loader css这个模块
                // style-loader css内容插到html的style标签内
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板来源文件
            filename: 'index.html'  // 生成的模板文件的名字
        }),
        new BundleAnalyzerPlugin(),
        // 静态资源做一个拷贝 拷贝到dist目录下
        new CopyPlugin({
            patterns: [
                { from: './public/avatar.JPG', to: './' },
            ],
        }),
    ]
}

module.exports = config

// dist 存着的就是项目最终打包完的结果
// dist 就是最终上线的文件夹