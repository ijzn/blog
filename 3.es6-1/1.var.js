// var let const 局部作用域
// es6 -> es5 babel
// 1. 声明的变量默认声明到全局上，  全局作用域，函数作用域
// 2. 用var 声明变量 会导致变量提升。 var funtion  import
// 用let声明的变量会绑定到当前作用域 暂存死区、
// 3. var 声明的变量可以修改
// 4. 尽量使用 const ，如果变量需要改变，再换成let
// 5. 自执行函数
{
    let a = 1;
    // console.log(a);
}

{
    var b = 2;
    console.log(b);
}