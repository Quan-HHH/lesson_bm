const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 是HtmlWebpackPlugin帮我们生成页面的
// loader 内容的转换 一份code转换为另一份code
// plugin 监听webpack的生命周期对应的生命周期做对应的事
// 
module.exports = {
	entry: {
		"order": './src/pages/order/index.js',
		"promation": './src/pages/promation/index.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							"presets":[
								"@babel/preset-env", 
								"@babel/preset-react"
							],
						}
					}
				],
			}
		],
	},
	plugins: [
    new HtmlWebpackPlugin({
		template: './src/pages/order/index.html',
		filename: 'order.html',
		chunks: ['order']
	}),
    new HtmlWebpackPlugin({
		template: './src/pages/promation/index.html',
		filename: 'promation.html',
		chunks: ['promation']
	}) // 可以new多次 每new一次生成一个html页面
  ]
};
