// 反射 object.definPropertry
// 里面有部分的对象方法， 放到了reflect 功能基本一样
// proxy中能代理的方法，Reflect 就可以实现

let myobject = {foo:1, bar:2,get baz(){ return this.foo + this.bar } }

Reflect.get()