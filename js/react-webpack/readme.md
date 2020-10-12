https://webpack.docschina.org/configuration/externals/#externals

提高打包速度 happypack/dll动态链接库

webpack优化: 分离基础库


webpack体积优化:
   - externals: 用cdn的地址在public下面的模板文件html中的script标签引进来
   - splitChunk:

webpack打包时间优化:
   - dll: 既可以分离基础库 又可以提升打包速度