// 高阶函数
// 一个函数的参数是函数 （回调）
// 一个函数 返回一个函数 （拆分函数）

// 函数的before
// 希望将核心逻辑提取出来，在外面添加功能

// 重写原型链上的功能
Function.prototype.before = function(beforeFn) {
    return (...arguments) => {// 箭头函数中没有this指向，也没有arguments 所以要去上层作用域查找
        beforeFn();
        this(...arguments) // 展开运算符
    }
}

// AOP 面向切片编程/装饰 把核心逻辑抽离出来，在核心逻辑上添加功能
const say = (...args) => { // 剩余运算符 把所有参数组成一个数组
    /**
     * 剩余参数（rest parameter）允许长度不确定的实参表示为一个数组。
     * 如果一个函数的最后一个形参是以 … 为前缀的，则在函数被调用时,该形参会成为一个数组,数组中的元素都是传递给该函数的多出来的实参的值
     */
    console.log('说话', args);
}

const newSay = say.before(() => {
    console.log('您好');
})

const newSay1 = say.before(() => {
    console.log('天气好');
})
newSay(1,2,3,4)
newSay1()


// react 事务