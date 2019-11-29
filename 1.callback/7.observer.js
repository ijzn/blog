// 观察者模式 包含发布订阅
// vue 中的 watcher
class Subjuect { // 被观察者 婴儿
    constructor(){
        this.arr = []; // [o1, o2 ]
        this.state = '开心';
    }
    attach(o){ // 挂载
        this.arr.push(o)
    }
    setState(newState) {
        this.state = newState;
        this.arr.forEach(el => el.upData(newState))
    }
}

class Observer { // 观察者 婴儿父母
    constructor(name){
        this.name =name;
    }
    upData(newState){
        console.log(`${this.name}：孩子${newState}`);
    }
}

const r = new Subjuect('婴儿')
const o1 = new Observer('父亲')
const o2 = new Observer('母亲')
r.attach(o1)
r.attach(o2)
r.setState('饿了')