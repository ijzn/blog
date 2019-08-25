// 深拷贝


// 拷贝出来的结果和以前没关系，叫深拷贝。  ... 如果用的是多层对象，就是浅拷贝
// let school = {a:1,b:2}
// let my = {d:3,c:4}
// console.log({...school,...my});

// 1. JSON.parse(JSON.stringify(Object)) 可以，没有函数，没有正则是可以的。
// 如何实现深拷贝 递归拷贝 lodash =》cloneDeep

// 1.怎么判断 数据类型
// type Object Array 
// Object.prototype.toString.call()
// instanceof 可以判断类型，可以判断是谁的实例
// constructor 构造函数


// 深拷贝 WeakMap 弱引用 绑定的是引用路径
const cloneDeep =(value, hash = new WeakMap) =>{
    if(value == null) return value; // 排除 null 和 undefined
    if(typeof value !== 'object') return value; // 已经包含了函数。
    if(value instanceof RegExp) return new RegExp(value);
    if(value instanceof Date) return new Date(value);
    // ...
    const instance = new value.constructor();  // 根据当前的一个属性构造一个新的实例
    if (hash.has(value)) { // hash中查看下是否存在过，如果有就把以前拷贝的数据返回
        console.log('>>>>>>');
        return hash.get(value)  // 返回已拷贝的结果
    }
    hash.set(value, instance) // 没有就放进去
    for (const key in value) {
        // 过滤原型链上的属性
        if (value.hasOwnProperty(key)) { // 将hash传递下去
            instance[key] = cloneDeep(value[key], hash);  // 产生的就是一个新的拷贝后的结果
        }
    }
    return instance;
}

// let arr = [1,2,3,[3,4,5]]
// let newArr = cloneDeep(arr);
// newArr[3][0] = 300;
// console.log(arr, newArr);

// 会造成爆栈 可以在cloneDeep用WeakMap解决
let obj ={a:1}
// obj.b = obj
obj.b = {k:9}
let newobj = cloneDeep(obj);
newobj.a =3
console.log(obj, newobj);


