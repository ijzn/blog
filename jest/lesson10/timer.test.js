import {timer, timerloop} from './timer';


beforeEach(() =>{
    jest.useFakeTimers()
})



// 测试 timer的一种方案，但是要是延迟时间是30分钟，要等3分钟么？
// test('测试 timer', (done) => {
//     timer(() => {
//         expect(1).toBe(1)
//         done()
//     })
// })


// 定时器的模拟 https://jestjs.io/docs/zh-Hans/timer-mocks
// jest.useFakeTimers();
test('测试timer', () =>{
    const fn = jest.fn();
    timer(fn);
    // “快进”时间使得所有定时器回调被执行 说人话： 立即运行所有的定时器的回调函数
    jest.runAllTimers();
    // 是否被运行过一次
    expect(fn).toHaveBeenCalledTimes(1)
})

test('测试 test loop', () =>{
    const fn = jest.fn()
    timerloop(fn);
    // jest.runAllTimers();
    jest.runOnlyPendingTimers();
    expect(fn).toHaveBeenCalledTimes(1)
})

test.only('测试 test loop', () =>{
    const fn = jest.fn()
    timerloop(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1)
})