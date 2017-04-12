# node用法与例子

## 用法
```
node [options] [v8 options] [script.js | -e "script"] [arguments]
```

## 例子
简易web服务器
```
const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello Node');
});

server.listen(port,host,()=>{
    console.log(`服务器运行在 http://${host}:${port}`);
})
```
运行`node hello.js`

[code](../codes/hello/hello.js)