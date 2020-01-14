# jest 的简单配置

### 命令行
```
<!-- 初始化 -->
npx jest --init
```

### 代码覆盖率
jest.config.js
coverageDirectory: 'coverage'  //这里的coverage 是代表的文件夹的名字
npx jest --coverage 查看代码覆盖率
会生成 coverage/Icov-report/index.html 中查看覆盖率

### ESModal 配置
jest默认是只认识commonJS 因为jest默认运行在node的环境中。
解决方案：babel处理下。esmodal转成comonjs就可以了
步骤：
1. npm i @babel/core @babel/preset-env -D
2. 新建 .babelrc 文件 文件配置如下
```
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "node": "current"
            }
        }]
    ]
}
```
3. npm run test

实现原理：
1. npm run jest 的时候
2. jest内部执行（jest-babel）
3. 检测是否安装babel-core，
4. 取.babelrc 中的配置
5. 运行测试之前，结合babel，先把测试用例代码转换一遍
6. 执行转化过的测试用例代码