# Path(路径)

path模块提供了一些工具函数，用于处理文件与目录的路径。

## Windows 与 POSIX
```js
const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
// posix 输出C:\temp\myfile.html
// windows 输出myfile.html

console.log(path.win32.basename('C:\\temp\\myfile.html'));
// 输出myfile.html
```
要想在任何操作系统上处理Windows文件路径时获得一致的结果，需要使用path.win32。

要想在任何操作系统上处理POSIX文件路径时获得一致的结果，需要使用path.posix。

## path.basename(path[, ext])
path.basename()方法返回一个path的最后一部分
```js
const path = require('path');

console.log(path.basename('/Users/favers/Code/Codes/node-learn/codes/path/path.basename.js'));

console.log(path.basename('/Users/favers/Code/Codes/node-learn/codes/path/path.basename.js', '.js'));
```

## path.delimiter
提供平台特定的路径分隔符：
+ Windows上是 ;
+ POSIX上是 :

```js
const path = require('path');

console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));
```

## path.dirname(path)
path.dirname()方法返回一个path的目录名
```js
const path = require('path');

console.log(path.dirname('/favers/test/test.html'));
```

## path.extname(path)
path.extname()方法返回path的扩展名
```js
const path = require('path');

console.log(path.extname('index.js'));
console.log(path.extname('base.config.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
```

## path.format(pathObject)
path.format()方法会从一个对象返回一个路径字符串
```js
const path = require('path');
let pathName = '';

// 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
pathName = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(pathName);
// 返回: '/home/user/dir/file.txt'

// 如果没有指定 `dir`，则 `root` 会被使用。
// 如果只提供了 `root` 或 `dir` 等于 `root`，则平台的分隔符不会被包含。
// `ext` 会被忽略。
pathName = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
});
console.log(pathName);
// 返回: '/file.txt'

// 如果没有指定 `base`，则 `name` + `ext` 会被使用。
pathName = path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
});
console.log(pathName);
// 返回: '/file.txt'
```

## path.isAbsolute(path)
path.isAbsolute()方法会判定path是否为一个绝对路径
```js
const path = require('path');

console.log(path.isAbsolute('/Users/favers/xxx.js'));
console.log(path.isAbsolute('/Users/favers/..'));
console.log(path.isAbsolute('favers'));
console.log(path.isAbsolute('./favers'));
```

## path.join([...paths])
```js
const path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.join('/foo', {}, 'bar')); // typeError
```

## path.normalize(path)
path.normalize() 方法会规范化给定的path
```js
const path = require('path');

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
```

## path.parse(path)
ath.parse() 方法返回一个对象
```js
const path = require('path');

console.log(path.parse('/home/user/dir/file.txt'));
```
```
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
(请无视以上字符串中的空格，它们只是为了布局)
```

## path.posix
path.posix 属性提供了 path 方法针对 POSIX 的实现

## path.relative(from, to)
path.relative() 方法返回从 from 到 to 的相对路径
```js
const path = require('path');

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
```

## path.resolve([...paths])
path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
```js
const path = require('path');

console.log(path.resolve('/foo/bar', './baz'));

console.log(path.resolve('/foo/bar', '/tmp/file/'));

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
```

## path.sep
提供了平台特定的路径片段分隔符：
+ Windows 上是 \
+ POSIX 上是 /

```js
const path = require('path');

console.log('foo/bar/baz'.split(path.sep));
```

## path.win32
path.win32 属性提供了path方法针对Windows的实现