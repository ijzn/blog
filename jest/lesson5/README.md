# jest 异步代码测试

## 异步代码测试有很多种写法，这里只说一种我比较喜欢的用法

tips: expect.assertions(n) 是指 expect必须执行n次
```
test('异步 成功', async () => {
    const res = await fetchData();
    expect(res.data).toEqual({
        success: true
    })
})

test('异步 404', async() => {
    expect.assertions(1) // 
    try {
        await fetchData();
    } catch (e) {
        expect(e.toString().includes('404')).toBeTruthy()
    }
})
```



