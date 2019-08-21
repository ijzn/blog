// 发布订阅，就是每次发布都要去通知到订阅你的人。
// 发布订阅模式，发布者和订阅者没关系
const fs = require('fs');
// 并发问题，如何解决，发布订阅模式
const e = {
    arr: [],
    on(fn){ // .push
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn =>{
            fn()
        })
    }
}
let school = {}
fs.readFile('name.txt','utf8',(err,data)=>{
    school['name'] = data;
    e.emit()
})
fs.readFile('age.txt','utf8',(err,data)=>{
    school['age'] = data;
    e.emit()
})


e.on(() => { // 订阅
    console.log('ok');
})

e.on(()=>{ // 订阅
    Object.keys(school).length ==2 && console.log('school :', school);
})




