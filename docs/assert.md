# assert(断言)

## assert(value[,message])
assert.ok()的别名

```
const assert = require('assert');

assert(true);
// 通过
assert(1);
// 通过
assert(false);
// 抛出 "AssertionError: false == true"
assert(0);
// 抛出 "AssertionError: 0 == true"
assert(false, '不是真值');
// 抛出 "AssertionError: 不是真值"
```

[code](../codes/assert/assert.js)
