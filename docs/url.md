# URL
url 模块提供了一些实用函数，用于 URL 处理与解析。

## URL 字符串与 URL 对象
一个 URL 字符串是一个结构化的字符串，它包含多个有意义的组成部分。

![2017-04-20-11-24-01](http://oji7gwhr9.bkt.clouddn.com/2017-04-20-11-24-01.png)

## urlObject.href
href 属性是解析后的完整的 URL 字符串，protocol 和 host 都会被转换为小写的。

## urlObject.protocol
protocol 属性表明 URL 的小写的协议体制。

## urlObject.slashes
slashes 属性是一个 boolean，如果 protocol 中的冒号后面跟着两个 ASCII 斜杠字符（/），则值为 true。

## urlObject.host
host 属性是 URL 的完整的小写的主机部分，包括 port（如果有）。

## urlObject.auth
auth 属性是 URL 的用户名与密码部分。 

## urlObject.hostname
hostname 属性是 host 组成部分排除 port 之后的小写的主机名部分。

## urlObject.port
port 属性是 host 组成部分中的数值型的端口部分。

## urlObject.pathname
pathname 属性包含 URL 的整个路径部分。

## urlObject.search
search 属性包含 URL 的整个查询字符串部分，包括开头的 ASCII 问号字符（?）。

## urlObject.path
path 属性是一个 pathname 与 search 组成部分的串接。

## urlObject.query
query 属性是不含开头 ASCII 问号（?）的查询字符串，或一个被 querystring 模块的 parse() 方法返回的对象。

## urlObject.hash
hash 属性包含 URL 的碎片部分，包括开头的 ASCII 哈希字符（#）。

## url.format(urlObject)
url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串。

## url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。

## url.resolve(from, to)
url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
```js
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```

## 转义字符
URL 只被允许包含一个特定范围的字符串。 URL 对象的属性中的空格（' '）和以下字符会被自动转义。

`< > " ` \r \n \t { } | \ ^ '`
