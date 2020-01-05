# jest 命令行工具的使用

## vscode小技巧
1. command + shift + p
2. 输入 install code command，选择在PATH中安装code命令
3. 在终端中 输入 code + 要打开文件的路径，就可以用vscode打开了。

## 命令行
### f 模式
Press f to run only failed tests.
只去执行失败的测试用例
### o 模式
只去执行变化文件相关的测试用例。需要配合git使用，只有记录变化后才知道去执行哪些文件。jest --watch 默认进 o模式
### t 模式
Press t to filter by a test name regex pattern.
根据正则表达式来确认要执行哪些测试用例
说人话就是，如果我输入to， jest会执行测试用例名称中包含to的测试用例。
### q 模式
Press q to quit watch mode.
退出监听模式

### p 模式
Press p to filter by a filename regex pattern.
类似于t模式
如果我输入machers1， jest会执行测试文件名称中包含machers1的c测试文件中测试用例。

