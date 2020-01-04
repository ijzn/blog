// toBe
// test('10 === 10', () => {
//     // toBe 匹配器 matchers
//     const a = { b: 1 }
//     expect(a).toBe({ b: 1 })
// })

// test('测试对象内容相等', () => {
//     // toEqual 匹配器
//     const a = { b: 1 }
//     expect(a).toEqual({b:1})
// })


// 真假有关的匹配器

test('测试对象内容是否为null', () => {
    // toBeNull 匹配器
    const a = null;
    // const a = undefined;
    expect(a).toBeNull();
})


test('测试对象内容是否为undefined', () => {
    // toBeUndefined 匹配器
    const a = undefined;
    expect(a).toBeUndefined();
})

test('测试对象内容是否被定义过', () => {
    // toBeDefined 匹配器
    const a = null;
    expect(a).toBeDefined();
})

test('toBeTruthy 匹配器', () => {
    // toBeTruthy 匹配器
    const a = 1;
    expect(a).toBeTruthy ();
})

test('toBeFalsy 匹配器', () => {
    // toBeTruthy 匹配器
    const a = 0;
    expect(a).toBeFalsy();
})

test('not 匹配器', () => {
    // toBeTruthy 匹配器
    const a = 1;
    expect(a).not.toBeFalsy();
})

// 数组相关的匹配器
test('toBeGreaterThan 匹配器', () => {
    // 比某个值要大
    const count =10;
    expect(count).toBeGreaterThan(9)
})

test('toBeLessThan 匹配器', () => {
    // 比某个值要小
    const count =10;
    expect(count).toBeLessThan(19)
})

test('toBeGreaterThanOrEqual 匹配器', () => {
    // count 要大于等于10
    const count =10;
    expect(count).toBeGreaterThanOrEqual(10)
})

test('toBeLessThanOrEqual 匹配器', () => {
    // count 要小于等于10
    const count =10;
    expect(count).toBeLessThanOrEqual(10)
})

test('toBeCloseTo 匹配器', () => {
    // 浮点数相加
    const a = 0.2;
    const b = 0.1
    // expect(a+b).toBeEqual(0.3)
    expect(a+b).toBeCloseTo(0.3)
})

// 字符串相关
test('toMatch', () => {
    // 检测字符串中是否含有某个值 字符串。正则都可以
    const str = 'http://www.github.com/ijzn'
    expect(str).toMatch(/ijzn/)
})

// 数组相关 Array Set
test('toContain', () => {
    // 数组中是否包含某个值
    const arr = ['jzn', 'xxx', 'yyy']
    const data = new Set(arr)
    // expect(data).toContain('jzn')
    expect(arr).toContain('jzn')
})

// 异常场景的匹配器
const toThrowFun = () => {
    throw new Error('this is new Error')
}
test('toThrow', () => {
    // toThrow中的参数可以为字符串或者正则表达式
    expect(toThrowFun).toThrow('this is')
})

