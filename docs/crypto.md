# Crypto(加密)

crypto模块提供了一些加密功能,包括OpenSSL hash、HMAC、密码、解密、签名和验证功能
```js
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);
```

## 确定加密支持是否不可用
不支持加密模块的时候会抛出一个错误
```js
let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}
```