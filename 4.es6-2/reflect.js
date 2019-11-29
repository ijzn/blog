// 反射 object.definPropertry
// 里面有部分的对象方法， 放到了reflect 功能基本一样 13种
// proxy中能代理的方法，Reflect 就可以实现

let obj = {foo:1, bar:2,get baz(){ return this.foo + this.bar } }

// 1. get
console.log(Reflect.get(obj,'foo'));
// 2. set
console.log(Reflect.set(obj,'bar', 9),obj);

// 新写法
// 3. has
console.log(Reflect.has(obj, 'foo1'));

const obj1 = {a:1}
Object.freeze(obj1) // 冻结
// Object.defineProperty(obj1, 'a',{
//     value: 100
// }) // 会报错。
// 4. defineProperty
let flag = Reflect.defineProperty(obj1, 'a',{
    value: 100
})
console.log(flag);

// 5. ownKeys 获取自身所有的key
let obj2 = {
    a:1,
    [Symbol()]:2,
}
console.log(Object.getOwnPropertyNames(obj2)); 
console.log(Object.getOwnPropertySymbols(obj2)); 
console.log(Reflect.ownKeys(obj2));

// 6. getPrototypeOf setPrototypeOf
Object.getPrototypeOf()
Object.setPrototypeOf()
Reflect.getPrototypeOf()
Reflect.setPrototypeOf()

// 7. 函数的apply 方法   bind call apply 的区别 改变this的指向
const fn = function (a,b) {  // apply支持多个参数传参 
    console.log(this,a,b);
}
fn.apply = function() {
    console.log('apply');
}
// 函数原型上的apply 让他去执行
// call的特点：1.改变this的指向，让函数执行
// fn.call(1,2,3)
// Function.prototype.apply.call(fn,1,[2,3])
Reflect.apply(fn,1,[2,3]) // 使用原型上的apply方法





