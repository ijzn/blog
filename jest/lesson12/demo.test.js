import addDivToBody from './demo';
import $ from 'jquery';


test('测试DOM', () => {
    addDivToBody()
    addDivToBody()
    expect($('body').find('div').length).toBe(2)
})

// 为什么可以这么做
// jest运行在node环境中，node不具备DOM，
// jest 在node环境中自己模拟了一套DOM的API JSDOM