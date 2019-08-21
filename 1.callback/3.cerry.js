// 柯里化 ：将一个函数拆分成多个函数，可以缓存数值，不调用不执行
// 判断类型 Obect.prototype.toString.call()
// 高阶函数中包含柯里化 可以保留参数 bind

const checkType = (type) => {
    return (content) => {
      return Object.prototype.toString.call(content) ===`[object ${type}]`
    }
}

// 闭包
let types = ["Number","String", "Boolean"]

const utils = types.reduce((total, cur)=>{
    total[`is${cur}`] = checkType(cur)
    return total;
}, {})

console.log('utils :', utils);
console.log(utils.isString('123'));
console.log(utils.isNumber('123'));


// fn.length 就是 入参的个数
const add = (a,b,c,d,e) => {
  return a + b + c + d + e;
}
// 通用的柯里化函数
const curring = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    // 
    arr = [...arr, ...args] // [1], [1,2] ... [1,2,3,4,5]
    console.log('arr :', arr, args, len);
    // 递归-->剪枝
    if (arr.length < len) {
      return curring(fn, arr)
    }
    return fn(...arr)
  }
}

let r = curring(add)(1)(2)(3,4,5,7,9)
console.log(r);




