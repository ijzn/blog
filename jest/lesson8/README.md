# snapshot 快照测试
## 生成快照
```
// 生成快照对比
expect(generrateConfig()).toMatchSnapshot()
```
如果依赖发生更新(即demo中的代码发生变化)，在终端中摁 w 进去筛选模式，确认更新快照 则摁 u 去更新。


## 多个快照 如何逐个确认
Press i to update failing snapshots interactively.
如果多个依赖发生更新(即demo中的两个函数发生变化)，在终端中摁 w 进去筛选模式，先点击 i , 进入交互更新模式，确认更新快照 则摁 u 去更新。

## 若 某个值为Date值怎么处理
```
expect(generrateConfig()).toMatchSnapshot({
  time: expect.any(Date)
})
```
上述代码，表示忽略time这个字段，只要他格式对就可以。


## 行内快照
需要先安装第三方的npm模块, prettier
```
cnpm i prettier -D
expect(generrateAnotherConfig()).toMatchInlineSnapshot({time: expect.any(Date)})

```
行内快照和快照的区别就是快照是放在测试用例中还是放在外面