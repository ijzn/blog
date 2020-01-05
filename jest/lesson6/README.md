# jest 钩子函数
核心的4个钩子函数：
beforeAll afterAll
beforeEach afterEach

分组 describe

## beforeAll
所有测试用例执行前，会执行此钩子函数

## afterAll
所有测试用例执行完毕后，会执行此钩子函数

## beforeEach
每次执行测试用例前都会执行此钩子函数；
实例类要在这个钩子函数中进行。

## afterEach
每次执行测试用例后都会执行此钩子函数

详情请见 代码