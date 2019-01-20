## 配置用户
```
git config --list  查看git列表
git config --global user.name "你的名字"   设置全局姓名
git config --global user.email "你的邮箱"  设置全局邮箱
```
#初始化
##初始化git
- 一个项目初始化一次，不能嵌套着来
```
git init    告诉git哪个文件夹被git管理
git status  查看git状态
```
## 添加到暂存区
```
git add . | -A   提交所有数据到暂存区
```
## 删除暂存区
```
git rm --cached -r . 递归的删除
```
## 添加到历史区(线上版本库)
```
git commit -m '提交说明'
```
## 查看日志
```
git log
```
## git对比  工作区和暂存区的对比  | 工作区和暂存区的对比 | 暂存区和历史区对比
```
git diff | git diff master(线上分支名) | git diff --cached
```
# 撤销
## 撤销 暂存区将工作区内容覆盖掉 | 
```
git checkout .|文件名  
```
## 撤销 上一次暂存区将本次暂存区内容覆盖掉
```
 拉取最近一次提交到版本库的文件到暂存区 并且该操作不影响工作区
git reset HEAD .|文件名        
```
# 回滚历史版本
## 回滚  历史区  会覆盖掉 工作区和暂存区  慎重使用 危险！！！！
> 回滚版本后，git log只能看当前版本之前日志，回滚之前的版本和当前版本之间的日志是看不到的，如果想看  需要用 git reflog
```
git reset --hard 版本id  
git reset --hard^              回滚到上次的历史版本
git reflog                     查看全部日志
```
## 回滚某个版本的文件
```
git checkout 版本号 文件名
```
# 分支
## 查看当前分支
```
git branch         会列出所有本地分支，当前分支前面会标一个*号
```
##创建新分支 
```
git branch branchName
```
##切换分支：
```
git checkout branchName
```
## 合并上面两个命令 创建新分支并切换道新的分支 
```
git checkout -b branchName
```
## 删除分支
> 删除分支时当前用户不能在当前要删除的分支上
```
git branch -D 分支名
```
## 文件修改(未暂存未提交) 切换分支
> 分支有更改不能直接切换，可以提交更改或者暂存更改，暂存是使用暂存区覆盖掉工作区，原来工作区的代码就没有了，如果想要原来的代码，git stash pop, 就可以了
```
git stash                     暂存文件
git stash pop                 还原暂存的内容
```
## 合并分支
```
git merge dev        合并指定分支(dev分支)到当前分支
```
## 解决冲突
> 遇到冲突时,只能手动的解决冲突，留下想要的结果再次提交
## 本地提交
- README.md
- 创建一个.gitignore (node_modules .DS_Store)
- git 不会上传空文件夹, 如果要上传要在空文件夹里添加 .gitkeep 文件
  
## 关联远程仓库
```
git remote add origin 地址(https://github.com/ijzn/weback4.git)
git remote -v 查看线上信息
```
## 删除关联
```
git remote rm 名字
eg:
git remote add b www.baidu.com/sda.git
git remote rm b     
```
## 推送 代码
```
git push origin master
```
## 拉取代码
```
git pull origin master
```
## gh-pages 分支来发布自己的静态页
- 在项目中创建一个 gh-pages 分支
- 将分支提到线上仓库
- 找到并提供给你的网站   github -> settings -> github-pages
``` 
git checkout -b gh-pages
touch index.html
git add .
git commit -m 'xxx'
git push origin gh-pages
```
## issue 问题
- 可以提交对项目的疑问或者自己的看法
  
## 更改别人的代码
- fork 是在当前项目下克隆了一份，如果代码更新，不会随之更新
> 只有fork关系才能发送pull request请求

## 拉取本地
```
git clone 项目地址 项目别名
```
> 默认就是git 仓库而且有origin 地址，可以将代码提交到自己的仓库上。
## collaborators 
- 添加贡献者，被添加的人拥有最大权限

## GUI界面化
- 比较推荐 sourcetree 或者 smartgit

## liunx 基本命令
- pwd                              | 获取本地路径
- rm -rf (文件夹名)                 | 强制删除 递归删除。慎用！！！
- rm (文件名)                       | 强制删除 文件
- mkdir (文件名)                    | 新建文件夹    mkdir demo
- cd 路径                           | 切换文件夹
- ls                               | 显示目录下所有文件
- touch 文件名                      | 创建空文件         
- cat 文件名                        | 打开文件
- vi 文件名 -> i (进入可编辑状态) -> esc (推出可编辑状态) -> :q (退出) :q! (强制保存) :wq (保存并退出)                        | 编辑文件 
- echo 内容 >> 文件名               | 向文件中追加内容
