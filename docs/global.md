# Global(全局变量)
这些对象在所有模块中都是可用的。

## Buffer 类
用于处理二进制数据。

## __dirname
当前模块的目录名。 等同于 __filename 的 path.dirname()。

__dirname 实际上不是一个全局变量，而是每个模块内部的。

```
const path = require('path');

console.log(__dirname);
console.log(path.dirname(__filename));
```

## __filename
当前模块的文件名。

__filename 实际上不是一个全局变量，而是每个模块内部的。
```
console.log(__filename);
console.log(__dirname);
```

## clearImmediate(immediateObject)
详细介绍在定时器中。

## clearInterval(intervalObject)#
详细介绍在定时器中。

## clearTimeout(timeoutObject)
详细介绍在定时器中。

## console
用于打印 stdout 和 stderr。 

## exports
module.exports 的一个简短的引用。

exports 实际上不是一个全局变量，而是每个模块内部的。

## global
全局的命名空间对象。

在浏览器中，顶层作用域就是全局作用域。 这意味着在浏览器中，如果在全局作用域内使用 var something 会定义一个全局变量。 在 Node.js 中则不同。 顶层作用域不是全局作用域；在 Node.js 模块中使用 var something 会是模块内部的。

## module
当前模块的引用。 

module 实际上不是一个全局变量，而是每个模块内部的。

## process
进程对象。

## require()
用于引入模块。

## require.cache
当模块被引入时，它们会缓存到这个对象。 

注意：这不适用于原生插件，因为重新加载会导致错误。

## require.resolve()
使用内部的 require() 机制来查找模块的位置，但不会加载模块，只返回解析后的文件名。

## setImmediate(callback[, ...args])
详细介绍在定时器中。

## setInterval(callback, delay[, ...args])
详细介绍在定时器中。

## setTimeout(callback, delay[, ...args])
详细介绍在定时器中。