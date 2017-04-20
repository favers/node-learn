# Debugger(调试器)
Node.js 包含一个进程外的调试工具，可以通过基于 TCP 的协议和内置调试客户端访问。

![debug](http://oji7gwhr9.bkt.clouddn.com/ss.gif)

## 监视器
可以在调试时监视表达式和变量的值。 

输入 watch('my_expression') 开始监视一个表达式。 watchers 命令会打印已激活的监视器。 输入 unwatch('my_expression') 来移除一个监视器

## 步进
+ cont, c - 继续执行
+ next, n - 下一步
+ step, s - 跳进函数
+ out, o - 跳出函数
+ pause - 暂停运行代码（类似开发者工具中的暂停按钮）

## 断点
+ setBreakpoint(), sb() - 在当前行设置断点
+ setBreakpoint(line), sb(line) - 在指定行设置断点
+ setBreakpoint('fn()'), sb(...) - 在函数体的第一条语句设置断点
+ setBreakpoint('script.js', 1), sb(...) - 在 script.js 的第 1 行设置断点
+ clearBreakpoint('script.js', 1), cb(...) - 清除 script.js 第 1 行的断点

## 信息
+ backtrace, bt - 打印当前执行框架的回溯
+ list(5) - 列出脚本源代码的 5 行上下文（前后各 5 行）
+ watch(expr) - 添加表达式到监视列表
+ unwatch(expr) - 从监视列表移除表达式
+ watchers - 列出所有监视器和它们的值（每个断点会自动列出）
+ repl - 打开调试器的 repl，用于在所调试的脚本的上下文中进行执行
+ exec expr - 在所调试的脚本的上下文中执行一个表达式

## 执行控制
+ run - 运行脚本（调试器开始时自动运行）
+ restart - 重新启动脚本
+ kill - 终止脚本

## 杂项
+ scripts - 列出所有已加载的脚本
+ version - 显示 V8 引擎的版本号