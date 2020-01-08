# jest定时器相关

## 方法一
```
test('测试 timer', (done) => {
    timer(() => {
        expect(1).toBe(1)
        done()
    })
})
```
这种方案可行，但是有缺陷。要是延迟时间是30分钟，要等3分钟么？


## 方法二
```
// 定时器的模拟 https://jestjs.io/docs/zh-Hans/timer-mocks
jest.useFakeTimers();
test('测试timer', () =>{
    const fn = jest.fn();
    timer(fn);
    // “快进”时间使得所有定时器回调被执行 说人话： 立即运行所有的定时器的回调函数
    jest.runAllTimers();
    // 是否被运行过一次
    expect(fn).toHaveBeenCalledTimes(1)
})
```
jest.useFakeTimers(); 和 jest.runAllTimers(); 配合使用


## runOnlyPendingTimers
在某些场景下你可能还需要“循环定时器”——在定时器的callback函数中再次设置一个新定时器。 对于这种情况，如果将定时器一直运行下去那将陷入死循环，所以在此场景下不应该使用jest.runAllTimers() 对于这些场景，你应该使用 jest.runOnlyPendingTimers():
<br>
jest.runOnlyPendingTimers(): 只运行在在队列中的定时器的回调函数

```
test.only('测试 test loop', () =>{
    const fn = jest.fn()
    timerloop(fn);
    // jest.runAllTimers();
    jest.runOnlyPendingTimers();
    expect(fn).toHaveBeenCalledTimes(1)
})
```

## advanceTimersByTime jest 22版本后支持。
22版本后为 advanceTimersByTime   22版本前为 runTimersToTime
快进多少时间
```
test.only('测试 test loop', () =>{
    const fn = jest.fn()
    timerloop(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1)
})
```
3s 和 6s 运行的次数都不一样。


### tips 
为了避免定时器之间相互影响，可以在beforeEach中运行 jest.useFakeTimers()