let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: { // 开发配置
    port: 8080,
    progress: true, // 显示进度条
    contentBase: path.join(__dirname,'dist'), //规定打开的目录
    open: true, // 自动打开浏览器
    compress: true, // 开启gzip压缩
    proxy:{}, // 跨域代理
  },
  mode: 'development',                 // 默认两种模式  production 生产环境    development 开发环境
  entry: './src/index.js',  // 入口
  output: {                 // 出口
    filename: 'bundle.[hash:8].js',   // 打包后的文件名,只显示8位hash值
    path: path.resolve(__dirname, 'dist')  // 路径必须是绝对路径
  }, 
  plugins:[ //数组 放着所有插件信息
    new htmlWebpackPlugin({
      template: './src/index.html',    // 模板
      filename: 'index.html',          // 打包后文件名，默认index.html
      hash: true,                      // 打包后文件带上hash戳
      minify: {
        removeAttributeQuotes: true, // 删除双引号
        collapseWhitespace: false,    // 折叠成一行
      }
    })
  ]
}