# Console(控制台)
console 模块提供了一个简单的调试控制台，它与 Web 浏览器提供的 JavaScript 控制台的机制类似。

该模块两个特定组件：
1. 一个 Console 类，包含 console.log() 、 console.error() 和 console.warn() 等方法，可以用于写入到任何 Node.js 流。
2. 一个全局的 console 实例，用于写入 process.stdout 和 process.stderr。 全局的 console 使用时无需调用 require('console')。

## Console类
Console 类可用于创建一个具有可配置的输出流的简单记录器，可以通过 require('console').Console 或 console.Console 使用。

## new Console(stdout[, stderr])
通过传入一个或两个可写流实例，创建一个新的 Console 对象。 stdout 是一个可写流，用于打印日志或输出信息。 stderr 用于输出警告或错误。 如果没有传入 stderr ，则警告或错误输出会被发送到 stdout 。

```js
const fs = require('fs');
const Console = require('console').Console;

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new Console(output, errorOutput);
// 像 console 一样使用
const count = 5;
logger.log('count: %d', count);
// stdout.log 中打印: count 5
```

全局的 console 是一个特殊的 Console 实例，它的输出会发送到 process.stdout 和 process.stderr。 相当于调用：
```js
new Console(process.stdout, process.stderr);
```

## console.assert(value[, message][, ...args])
一个简单的断言测试，验证 value 是否为真。 

注意：Node.js 中的 console.assert() 方法与在浏览器中的 console.assert() 方法的实现是不一样的。

具体地说，在浏览器中，用非真的断言调用 console.assert() 会导致 message 被打印到控制台但不会中断后续代码的执行。 而在 Node.js 中，非真的断言会导致抛出 AssertionError。
```js
// 原生测试
// console.assert(true, 'favers test');
// console.assert(false, '测试没有通过');
// console.log('后面不执行');

// 自定义console测试
const console = require('./myConsole');

console.assert(true, 'favers test');
console.assert(false, '测试没有通过');
console.log('后面还是可以执行');
```
扩展代码
```js
'use strict';

const myConsole = Object.create(console, {
    assert: {
        value: function assert(assertion, message, ...args) {
            try {
                console.assert(assertion, message, ...args);
            } catch (err) {
                console.error(err.stack);
            }
        },
        configurable: true,
        enumerable: true,
        writable: true
    }
})

module.exports = myConsole;
```

## console.dir(obj[, options])
在 obj 上使用 util.inspect() 并打印结果字符串到 stdout。

## console.error([data][, ...args])
打印到 stderr，并带上换行符。 

## console.info([data][, ...args])
console.info() 函数是 console.log() 的一个别名。

## console.log([data][, ...args])
打印到 stdout，并带上换行符。

## console.time(label)
启动一个定时器，用以计算一个操作的持续时间。

## console.timeEnd(label)
停止之前通过调用 console.time() 启动的定时器，并打印结果到 stdout。

## console.trace(message[, ...args])
打印字符串 'Trace :' 到 stderr ，并通过 util.format() 格式化消息与堆栈跟踪在代码中的当前位置。

## console.warn([data][, ...args])
console.warn() 函数是 console.error() 的一个别名。