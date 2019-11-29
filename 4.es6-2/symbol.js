// 数据类型 string number null undefined boolean 5种
// symbol 独一无二
// 用作常量

const s1 = Symbol(1) // number | string
const s2 = Symbol(1) // number | string
console.log(s1 == s2);

// 属性私有化
const s3 = Symbol.for('zf')
const s4 =  Symbol.for('zf'); // 如果symbol已经有这个值，就将这个值返回

console.log(s3 === s4);
console.log(Symbol.keyFor(s3));

let obj = {
    [s3]: 1, // es6 写法，[] 的含义是将s3 的结果作为key
}
console.log(obj[s3]); // 取值的时候不能用.运算符。只能用[]



// 元编程 可以改变js源代码的功能
// instanceof  可以判断某个人是谁的实例
let o = {
    name: 1
}
let obj1 = {
    [Symbol.hasInstance](){
        return 'name' in o
    }
}
console.log(o instanceof obj1);


let obj = {
    [Symbol.toPrimitive](value){
        console.log(value);
        return 'jzn'
    },
    a:1
} // valueof toString
console.log(obj+1);

// toString
let obj = {
    get [Symbol.toStringTag](){ // 属性
        return '123'
    }
}
// Object.prototype.toString 
console.log(obj.toString()); // [object 123]

// 衍生对象
class myArray extends Array {
    constructor(...args){
        super(...args)
    }
    static get [Symbol.species]() {
        return Array // 控制衍生对象的累的构造函数
    }
}

let myarr = new myArray(1,3,4)
let newArr = myarr.map(item => item+2)
// instanceof 原理 .__proto__.__proto__
console.log(newArr instanceof myArray);