// 希望 读取数据 异步代码 会等待同步代码都执行完后再执行
const fs = require('fs');


// 并发问题，如何解决，计数器  不能指定顺序
let after = (fn,times) =>() => --times == 0 && fn()
let school = {}
let newAfter = after(()=>{
    console.log(school);
},2)
fs.readFile('name.txt','utf8',(err,data)=>{
    school['name'] = data
    newAfter()

})
fs.readFile('age.txt','utf8',(err,data)=>{
    school['age'] = data
    newAfter()
})


// 发布订阅模式


// 观察者模式
