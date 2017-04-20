# OS(操作系统)
os 模块提供了一些操作系统相关的实用方法。

```js
const os = require('os');

console.log('行末标志：',os.EOL);
console.log('CPU架构：',os.arch());
console.log('特定常量：',os.constants);
console.log('CPU信息：',os.cpus());
console.log('字节顺序：',os.endianness());
console.log('空闲内存：',os.freemem());
console.log('home目录：',os.homedir());
console.log('主机名：',os.hostname());
console.log('平均负载：',os.loadavg());
console.log('网络地址：',os.networkInterfaces());
console.log('操作系统：',os.platform());
console.log('发行版：',os.release());
console.log('临时文件目录：',os.tmpdir());
console.log('所有内存：',os.totalmem());
console.log('操作系统名字：',os.type());
console.log('上线时间：',os.uptime());
console.log('用户信息：',os.userInfo());
```

## os.EOL
一个字符串常量,定义操作系统相关的行末标志:
+ \n 在 POSIX 系统上
+ \r\n 在 Windows系统上

## os.arch()
os.arch()方法返回一个字符串, 表明Node.js 二进制编译 所用的 操作系统CPU架构。

等价于 process.arch。

## os.constants
返回一个对象包含普遍用于错误码,处理信号等的操作系统相关的特定常量。

## os.cpus()
os.cpus() 方法返回一个对象数组, 包含安装的每个CPU/CPU核的信息.

## os.endianness()
os.endianness()方法返回一个字符串,表明Node.js二进制编译环境的字节顺序.

## os.freemem()
os.freemem() 方法以整数的形式回空闲系统内存 的字节数.

## os.homedir()
os.homedir() 方法以字符串的形式返回当前用户的home目录.

## os.hostname()
os.hostname()方法以字符串的形式返回操作系统的主机名.

## os.loadavg()
os.loadavg()方法返回一个数组,包含1, 5, 15分钟平均负载.

## os.networkInterfaces()
os.networkInterfaces()方法返回一个对象,包含只有被赋予网络地址的网络接口.

## os.platform()
os.platform() 方法返回一个字符串, 指定Node.js编译时的操作系统平台

## os.release()
os.release()方法返回一个字符串, 指定操作系统的发行版.

## os.tmpdir()
os.tmpdir()方法返回一个字符串, 表明操作系统的 默认临时文件目录.

## os.totalmem()
os.totalmem()方法以整数的形式返回所有系统内存的字节数.

## os.type()
os.type()方法返回一个字符串,表明操作系统的名字.

## os.uptime()
os.uptime() 方法在几秒内返回操作系统的上线时间.

## os.userInfo([options])
os.userInfo()方法当前有效用户的信息.