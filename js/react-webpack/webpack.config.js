const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化HTML的创建 基于自己提供的html模板创建
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 使用交互式可缩放树状图可视化webpack输出文件的大小
const CopyPlugin = require('copy-webpack-plugin');  // 拷贝图片到dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  
var ImageminPlugin = require('imagemin-webpack-plugin').default;  // 压缩图片
const HappyPack = require('happypack'); // 提高打包速度
const webpack = require('webpack');

// 分离基础库(react/react-dom) 可以缓存时间比较久的
// 业务代码: 经常变动的

// CDN的全称是Content Delivery Network，即内容分发网络。
// CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，
// 通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // externals: {
  //   react: 'React'
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 'all' 所有的import   async 异步的import
      cacheGroups: {
        vendors: {
          // 可以有很多个vendors, 只要是node_modules里面的东西, 就把满足这个规则的所有东西打包在一起
          // 分离出来的文件名字 就是这个key的名字
          test: /[\\/]node_modules[\\/]/,
        },
        // vendors1: {}
      }
    }
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        // use: ['babel-loader'],
        use: 'happypack/loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        }
      ],
        //css-loader css 这个模块
        //style-loader css内容 插到html 的 style标签之内
        // css-module
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    new MiniCssExtractPlugin(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }), // 图片压缩
    new HappyPack({
      // 3) re-add the loaders you replaced above in #1:
      loaders: [ 'babel-loader']
    }),
    // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
    new webpack.DllReferencePlugin({
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('./dist/dll/vendor-manifest.json'),
    })
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹