import { runCallBack, createNewClass, getData } from './demo';
import axios from 'axios'
test.only('测试 runCallBack', () => {
    // mock 函数 1. 捕获函数的调用和返回结果，以及this和调用顺序
    const fn = jest.fn();
    // const fn = jest.fn(() => {
    //     return 'kk'
    // });
    fn.mockImplementationOnce(() => {
        return 'kk'
    })
    // fn.mockReturnValueOnce('Dell').mockReturnValueOnce('lii')
    // 2. 它可以自由的设置返回结果
    // fn.mockReturnValue('kk')
    runCallBack(fn);
    runCallBack(fn);
    // toBeCalled 是否被调用过 调用一次的场景
    // expect(fn).toBeCalled();
    console.log(fn.mock);
    // 调用两次的场景 
    // expect(fn.mock.calls.length).toBe(2) 
    // 测试返回值对不对
    expect(fn.mock.results[0].value).toBe('kk')  // 断言

})

test('测试 createObject', () => {
    const fn = jest.fn();
    createNewClass(fn);
    console.log(fn.mock);
})


jest.mock('axios')
test('测试getData', async() => {
    // 3. 可以改变函数的内部实现
    axios.get.mockResolvedValue({data: '111'})
    const data = await getData();
    expect(data.data).toEqual('111')
})