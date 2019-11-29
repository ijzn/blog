// 

// 将类数组转成数组
// 类数组的定义：1 索引 2. 长度
// ... 和 Array.from 的区别：... 执行了Symbol.iterator , Array.from 只是做了个循环
function add() { 
    // for ... of 必须要给当前对象 提供一个生成器方法
    console.log([
        ...{
            0:1,
            1:2,
            length:2,
            [Symbol.iterator]: function *() {
                let index = 0;
                while (index !== this.length) {
                    yield this[index++]
                }
            }
            // [Symbol.iterator]() {
            //     // 迭代器是有next方法，且方法执行后 需要返回 value, done
            //     return {
            //         next() {
            //             return {
            //                 value: 1,
            //                 done: false
            //             }
            //         }
            //     }
            // }
        }
    ]);
}

add()

// yield 没有返回值，或者说总是返回undefind，next方法可以带一个参数这一个方法会被当成上一步yield的返回值.第一个next的值是被忽略的。
function * read(params) {
    let a = yield 'a';
    console.log('a>>',a)
    let b = yield 'b';
    console.log('b>>',b);
    let c= yield 'c'
    console.log('c>>',c);
}
let it = read();
console.log(it.next(100));
console.log(it.next(200));

// co 库。
let co = require('co')
let fs = require('fs')

function * read1() {
    let content = yield fs.readFile('../age.txt', 'utf8');
    let age = yield fs.readFile(content, 'utf8');
    return age
}

co(read1()).then(data => {
    console.log(data);
})
// 报错没跑通,报错。用处不大，拥抱aync await

// 并行的话，promise.all 就可以了。 async await 是 generator + co 的语法糖
const util = require('util')
const fs1 = require('fs');
const readAsync = util.promisify(fs1.readFile)
async function read2() {
    let content = await readAsync('age.txt',);
    return JSON.parse(content);
}
read2().then(data => {
    console.log('data:',data);
})




/**
 * 作业
 * 1. promise.finally 
 * 2. promise.try
 * 3. promise.race 谁快用谁
 * 4. 如何终止一个promise 不要当前这个promie结果
 * 5. 如何中断promise链 
 */