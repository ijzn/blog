# mock的深入了解

## 如何编写一个文件来代替真实的代码
1. 新建文件夹__mock__
2. 文件夹__mock__中的新建demo.js
3. jest.mock('./demo1')
4. 完成数据mock。

我TM没跑通啊。。。。
一模一样的代码，见鬼

jest.config.js 中automock: true
也可以达成相同的作用

如果某些函数不想被mock，则可以这样写
```
const { getNumber } = jest.requireActual('./demo1.js')
```
