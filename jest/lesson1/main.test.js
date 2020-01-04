const math = require('./main.js')
const { add } = math;

test('加法 3 + 7', () => {
    expect(add(3,7)).toBe(10)
})

// 单元测试， 集成测试
// 模块测试， 多个模块测试
