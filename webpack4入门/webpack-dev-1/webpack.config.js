let path = require('path')

module.exports = {
  mode: 'development',                 // 默认两种模式  production 生产环境    development 开发环境
  entry: './src/index.js',  // 入口
  output: {                 // 出口
    filename: 'bundle.js',   // 打包后的文件名
    path: path.resolve(__dirname, 'dist')  // 路径必须是绝对路径
  }, 
}