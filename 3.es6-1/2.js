// 解构赋值 ...
// 解构的方式，都可以用key来实现

// let [,age] = ['姓名', '年纪']
// console.log('age :', age);


// 用 : 来重新命名 用 = 来实现默认值
// let { name, age:age1, address='杭州' } = {name:'jack', age: 20,}
// console.log(name,age,address);


// 剩余运算符，  只能用在最后一行
// let [name, ...args] = ['jack', 'tom', 20]
// console.log(name, args);

// 对象的剩余运算运算符
// let { name, ...args } = {name:'jack', age: 20,}
// console.log(name, args);

// 展开运算符 合并数组，合并对象 
// let arr = [1,2,3]
// let arr1 = [2,3,4,5,6]
// console.log([...arr, ...arr1]);

// 数组去重，数组交集 差集
// set map 新数据结构，不能重复
// 没有key属性
// let set = new Set([...arr, ...arr1]);
// console.log(new Set(['blue','pink','red']).entries());

// set.add(2)
// set.clear() // 清除
// set.delete() // 删除某一项
// set.entries() // 
// console.log(set.entries());
// console.log(set.keys());
// console.log(set.values());
// set.forEach(item=>{
//     console.log(item);
// })

let a1 = [1,2,3,1,2,3,4]
let a2 = [2,3,4,5,6,2]
// 数组取并集
let s1 = new Set([...a1, ...a2])
// console.log([...s1]);
// for (const item of s1.entries()) {
//     console.log(item);
// }
// // 交集
// let s2 = new Set(a1);
// let s3 = new Set(a2);
// let a3 = [...s3].filter(item =>{
//     return s2.has(item)
// })
// console.log(a3);
// 差集 has方法来实现。 set只有forEach方法
// let s2 = new Set(a1);
// let s3 = new Set(a2);
// let a3 = [...s3].filter(item =>{
//     return !s2.has(item)
// })
// console.log(a3);

// set和map一致




