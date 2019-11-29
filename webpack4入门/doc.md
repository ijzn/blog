## webpack 的安装 
- 安装本地webpack 
``` 
yarn init  // 初始化
yarn add webpack webpack --save-dev 
```

## webpack 可以0配置 但是扩展性不是太好
执行命令为 `npx webpack`
- 打包工具 -> 输出js模块化
- 打包(支持js模块化)

## 手动配置webpack
- 默认配置文件的名字   webpack.cofig.js (webpack 是node 写出来的，在配置文件中要用node的写法)
  - 修改webpack配置文件的名字(默认是webpack.config.js) 比如修改成webpack.config.dev.js
     1. `npx webpack --config webpack.config.dev.js(webpack配置文件的名字)`
     2. 在pakeage.js文件中
        ```
            "scripts": {
                "build": "webpack --config webpack.config.dev.js"
            },
            // 运行 
            npm run build
        ```
    3. 在运行时候指定配置文件名称
        ```
            "scripts": {
                "build": "webpack"
            },
            // 运行 
            npm run build -- --config webpack.config.dev.js
        ```


## HTML 插件
- 下载 webpack-dev-server 插件 [详情](https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx)
- 在webpack.config.js中新增devServer，
    ```
    module.exports = {
      devServer: { // 开发配置 常用配置
        port: 8080,
        progress: true, // 显示进度条
        contentBase: path.join(__dirname,'dist'), //规定打开的目录
        open: true, // 自动打开浏览器
        compress: true, // 开启gzip压缩
        proxy:{}, // 跨域代理
      },
      ···
    }
    ```

- 下载html-webpack-plugin 插件 [详情](https://www.npmjs.com/package/html-webpack-plugin)
- 在webpack.config.js中新增plugins，
  ```
    module.exports = {
      plugins:[ //数组 放着所有插件信息
        new htmlWebpackPlugin({
          template: './src/index.html',    // 模板
          filename: 'index.html',          // 打包后文件名，默认index.html
          hash: true,                      // 打包后文件带上hash戳
          minify: {
            removeAttributeQuotes: true, // 删除双引号
            collapseWhitespace: true,    // 折叠成一行
          }
        })
      ]
      ···
    }
  ```