## jest 钩子函数
核心的4个钩子函数：
beforeAll afterAll
beforeEach afterEach

分组 describe

### beforeAll
所有测试用例执行前，会执行此钩子函数

### afterAll
所有测试用例执行完毕后，会执行此钩子函数

### beforeEach
每次执行测试用例前都会执行此钩子函数；
实例类要在这个钩子函数中进行。

### afterEach
每次执行测试用例后都会执行此钩子函数

详情请见 代码

## jest 钩子函数的作用域
钩子函数的作用域在最近的一个descibe中.
执行顺序是由外到内的。


## tips 调试技巧
1. test.only 只执行一个测试用例，忽略其他。
2. 所有准备代码一定要放在钩子函数里面。重点！！！ 否则排查问题能被坑死
