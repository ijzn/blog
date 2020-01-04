# jest 匹配器 https://jestjs.io/zh-Hans/

### toBe
类似于 js中的Object.is ===

### toEqual
只是去匹配内容是否相等


## 真假相关的匹配器
### toBeNull
只有为null的时候测试用例才会通过，underfind是不通过的

### toBeUndefined
只有为underfind的时候测试用例才会通过，null是不通过的

### toBeDefined
测试对象内容是否被定义过, null的时候通过测试用例，undefined测试用例不通过。

### toBeTruthy
是否为真

### toBeFalsy
是否为假

### not
取反

## 数字相关的匹配器
### toBeGreaterThan 
比某个值要大

### toBeLessThan
比某个值要小

### toBeGreaterThanOrEqual
测试值 要大于等于 toBeGreaterThanOrEqual中的值

### toBeLessThanOrEqual
测试值 要小于等于 toBeGreaterThanOrEqual中的值

### toBeCloseTo
对比两个浮点数是否相等的时候，使用toBeCloseTo而不是toEqual


## 和字符串相关的匹配器
### toMatch
检测字符串中是否含有某个值 toMatch中的参数可以是字符串,正则表达式

## 和数组相关的匹配器
### toContain
数组中是否包含某个值 Array Set均可使用

## 异常相关的匹配器
### toThrow
toThrow中的参数可以为字符串或者正则表达式

