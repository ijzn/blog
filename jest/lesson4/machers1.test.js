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
    throw new Error('this is a new Error')
}
test('toThrow', () => {
    // toThrow中的参数可以为字符串或者正则表达式
    expect(toThrowFun).toThrow('this is a')
})

