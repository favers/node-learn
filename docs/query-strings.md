# Query Strings(查询字符串)
querystring 模块提供了一些实用工具，用于解析与格式化 URL 查询字符串。

## querystring.escape(str)
querystring.escape() 方法对给定的 str 执行 URL 百分号编码。
```js
const querystring = require('querystring');

console.log(querystring.escape('test/favers'));
// test%2Ffavers
```

## querystring.parse(str[, sep[, eq[, options]]])
querystring.parse() 方法能把一个 URL 查询字符串（str）解析成一个键值对的集合。

分隔符可自定义默认为'&'和'='

```js
const querystring = require('querystring');

console.log(querystring.parse('foo=bar&abc=xyz&abc=123'));
// { foo: 'bar', abc: [ 'xyz', '123' ] }
```

## querystring.stringify(obj[, sep[, eq[, options]]])
querystring.stringify() 方法通过遍历对象的自有属性，从一个给定的 obj 产生一个 URL 查询字符串。
```js
const querystring = require('querystring');

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// foo=bar&baz=qux&baz=quux&corge=

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }, ':', ';'));
// foo;bar:baz;qux:baz;quux:corge;
```

## querystring.unescape(str)
querystring.unescape() 方法对给定的 str 上的 URL 百分号编码的字符执行解码。

querystring.unescape() 方法是供 querystring.parse() 使用的，且通常不被直接使用。

```js
const querystring = require('querystring');

console.log(querystring.parse('test%2Ffavers'));
// { 'test/favers': '' }
```