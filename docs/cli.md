# CLI(命令行选项)
Node.js自带了各种命令行选项。终端查看文档`man node`。

## 概要
`node [options] [v8 options] [script.js | -e "script"] [arguments]`

`node debug [script.js | -e "script" | <host>:<port>] …`

`node --v8-options`

执行时不带参数，会启动REPL。

## -v, --version
打印 node 的版本号。

## -h, --help
打印 node 的命令行选项。

## -e, --eval "script"
把跟随的参数作为 JavaScript 来执行。

## -p, --print "script"
与 -e 相同，但会打印结果。

## -c, --check
在不执行的情况下，对脚本进行语法检查。

## -i, --interactive
打开 REPL，即使 stdin 看起来不像终端。

## -r, --require module
在启动时预加载指定的模块。

## --no-deprecation
静默废弃的警告。

## --trace-deprecation
打印废弃的堆栈跟踪。

## --throw-deprecation
抛出废弃的错误。

## --no-warnings
静默一切进程警告（包括废弃警告）。

## --trace-warnings
打印进程警告的堆栈跟踪（包括废弃警告）。

## --trace-sync-io
每当事件循环的第一帧之后检测到同步 I/O 时，打印堆栈跟踪。

## --zero-fill-buffers
自动用 0 填充所有新分配的 Buffer 和 SlowBuffer 实例。

## --preserve-symlinks
当解析和缓存模块时，命令模块加载器保持符号连接。

## --track-heap-objects
为堆快照追踪堆栈对象的分配。

## --prof-process
处理 v8 分析器的输出，通过使用 v8 选项 --prof 生成。

## --v8-options
打印 v8 命令行选项。

## --tls-cipher-list=list
指定备用的默认 TLS 加密列表。

## --enable-fips
启动时启用符合 FIPS 标准的加密。

## --force-fips
启动时强制使用符合 FIPS 标准的加密。

## --openssl-config=file
启动时加载 OpenSSL 配置文件。

## --icu-data-dir=file
指定 ICU 数据的加载路径。
