# webpack + typescript入门项目

## 本项目是webpack以及typescript的练手项目，内容有：
- babel，webpack的配置流程，在下面
- 一个简单的typescript的项目
- 写这个项目时遇到的问题   problem-I-came-across.md
- 其他的配置             other-config.md

## 用到的技术栈
 - typescript
 - stylus
 - redux   redux-thunk   react-redux
 - react-router-config
 - mockjs
 - webpack  babel

## webpack以及ts、stylus等的配置

### .babelrc    配置babel
1. yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react -D
 - 在.babelrc下面加入:
 ```json
 {
    "presets": [
        [
          "@babel/env",
          {
            "targets": {
              "edge": "17",
              "firefox": "60",
              "chrome": "67",
              "safari": "11.1"
            },
            "useBuiltIns": "usage"
          }
        ],
        "@babel/preset-react"
    ]
 }
 ```
 或者
 ```json
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
    ]
  }
 ```
2. 配置webpack部分
 - module.rules 里面添加:
 ```js
 {
    test: /\.jsx?$/,
    use:['babel-loader'],
    exclude: /node_modules/,
 }
 ```

### webpack.config.js   配置webpack
1. yarn add react react-dom                 安装react
2. yarn add webpack webpack-cli -D          安装webpack
3. 配置webpack-dev-server
 - yarn add webpack-dev-server -D
 - 在 webpack.config.js 中的 devServer 中加入：
  ```js
    devServer: {
        contentBase: './public',
        hot: true,
    },
  ```
 - 修改 package.json 里面的script脚本
  ```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --mode production",
        "start": "webpack-dev-server --mode development"
    },
  ```
4. 配置 html模版自动生成
 - yarn add html-webpack-plugin -D          生成html模版的模块
 - 在 webpack.config.js 引入，然后再在plugin下面设置
  ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
  ```
  在 webpack.config.js下的plugin下面加入下面配置
  ```js
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
    })
  ```
  - yarn build 测试一下
5. 配置css
 - yarn add style-loader css-loader -D
 - 在 webpack.config.js 添加一下配置：
  ```js
    {
        test: /\.css$/,
        use:['style-loader','css-loader'],//顺序不能反
    }
  ```
6. 配置typescript
 - yarn add typescript ts-loader -D
 - 创建 tsconfig.json 文件，添加如下配置：
  ```json
    {
      "compilerOptions":{
        "outDir": "./dist",
        "moduleResolution": "node",              //模块的解析
        "module": "es6",
        "target": "es5",
        "allowJs": true,
        "allowSyntheticDefaultImports": true,    //让我们可以在tsx中像在js中一样引入模块
        "jsx": "react",                          //让 tsx文件可以写jsx语法
      }
    }
  ```
  加入
 - 在 webpack.config.js 的 module.rules 下面添加如下配置：
  ```js
    {
      test: /(.ts|.tsx)$/,
      use:['ts-loader'],
      exclude: /node_modules/,
    }
  ```