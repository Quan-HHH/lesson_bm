const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

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
      cacheGroup: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        }
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
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
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
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹