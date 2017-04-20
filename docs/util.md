# Util(实用工具)
util 模块主要用于支持 Node.js 内部 API 的需求。

## util.debuglog(section)
util.debuglog() 方法用于创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr。
```js
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
```
`NODE_DEBUG=foo node util.debuglog.js`

## util.deprecate(function, string)
util.deprecate() 方法会包装给定的 function 或类，并标记为废弃的。

## util.format(format[, ...args])
util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。

## util.inherits(constructor, superConstructor)
注意，不建议使用 util.inherits()。 请使用 ES6 的 class 和 extends 关键词获得语言层面的继承支持。

inherits继承
```js
const util = require('util');
const EventEmitter = require('events');

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function (data) {
    this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('运作良好！');
```
ES6 extends
```js
const EventEmitter = require('events');

class MyStream extends EventEmitter {
    constructor() {
        super();
    }
    write(data) {
        this.emit('data', data);
    }
}

const stream = new MyStream();

console.log(stream instanceof EventEmitter); //true
console.log(MyStream.super_ === EventEmitter); //false

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('使用 ES6');
```

## util.inspect(object[, options])
util.inspect() 方法返回 object 的字符串表示，主要用于调试。