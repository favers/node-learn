# assert(断言)

## assert(value[,message])
assert.ok()的别名

```javascript
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

## assert.deepEqual(actual, expected[, message])
测试actual和expected参数是否深度相等。原始使用相等运算符(==)比较。

只比较可枚举自身属性。忽略对象原型、链接符、不可枚举的属性。

```javascript
const assert = require('assert');

// 不会抛出AssertionError
// Error对象的属性不可枚举
// assert.deepEqual(Error('a'), Error('b'));

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b: 1
    }
};

const obj4 = Object.create(obj1);

// 通过 对象自身相等
assert.deepEqual(obj1, obj1);

// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// b不相等
// assert.deepEqual(obj1, obj2);

// 通过 两个对象相等
assert.deepEqual(obj1, obj3);

// AssertionError: { a: { b: 1 } } deepEqual {}
// 原型被忽略
assert.deepEqual(obj1, obj4);
```

[code](../codes/assert/assert-deepEqual.js)

## assert.deepStrictEqual(actual, expected[, message])
