# ES6 中类的测试 单元测试和集成测试的理解

## 单元测试和集成测试的理解
单元测试：只对单元模块中的代码进行测试。 <br>
Q：为什么单元测试会经常使用mock <br>
A：因为mock会让我们引入的一些外部模块变得简单，使单元测试运行起来更加快速。 
集成测试：对单元模块以及单元中包含的其他内容进行测试


## 类的测试
Q：因为util.js中的a,b方法异常复杂，真正运行的时候会比较耗费性能， 我们只要知道他执行过这个方法就好了，不需要真正的让他执行。

```
jest.mock('./demo');
import { demoFn } from './demo';
// jest.mock 发现util是个类，会自动的把构造函数和方法变成fn
// const util = jest.fn()
// const a = jest.fn()
// const b = jest.fn()
demoFn();
    expect(Util).toHaveBeenCalled()
    console.log(Util.mock.instances[0]);
    expect(Util.mock.instances[0].a).toHaveBeenCalled()
    expect(Util.mock.instances[0].b).toHaveBeenCalled()
```