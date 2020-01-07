# 项目启动步骤
1. cnpm i 
2. npm run test

## test方法
```
test('', () => {
    // 测试用例
    expect(add()).toBe(10)
})
```
add()  被测试的方法. 10 为理论上的值。 add() 运行结果 和 10 相等 则认为测试用例通过