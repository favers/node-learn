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

## assert.deepStrictEqual(actual, expected[, message])
大多数情况下与assert.deepEqual()一样，但有两个例外。 首先，原始值使用全等运算符（===）比较。 其次，对象的比较包括检查它们的原型是否全等。
```javascript
const assert = require('assert');

assert.deepEqual({ a: 1 }, { a: '1' });
// 通过，因为 1 == '1'

assert.deepStrictEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// 因为 1 !== '1' 使用全等运算符
```

## assert.doesNotThrow(block[, error][, message])
断言block函数不会抛出错误。
如果抛出错误且错误类型与error参数指定的相同，则抛出AssertionError。 
```javascript
const assert = require('assert');

assert.doesNotThrow(
    () => {
        throw new TypeError('错误');
    },
    SyntaxError
);
```

## assert.equal(actual, expected[, message])
使用相等运算符（==）测试actual参数与expected参数是否相等。
```javascript
const assert = require('assert');

assert.equal(1, 1);
// 通过，1 == 1
assert.equal(1, '1');
// 通过，1 == '1'

// assert.equal(1, 2);
// 抛出 AssertionError: 1 == 2
assert.equal({a: {b: 1}}, {a: {b: 1}});
// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
```

## assert.fail(actual, expected, message, operator)
抛出AssertionError。
```javascript
const assert = require('assert');

// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息
```

## assert.ifError(value)
如果value为真，则抛出value。可用于测试回调函数的error参数。
```javascript
const assert = require('assert');

assert.ifError(0);
// 通过
// assert.ifError(1);
// 抛出 1
// assert.ifError('error');
// 抛出 'error'
assert.ifError(new Error());
// 抛出 Error
```

## assert.notDeepEqual(actual, expected[, message])
测试是否不深度相等。与assert.deepEqual()相反。
```javascript
const assert = require('assert');

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

// assert.notDeepEqual(obj1, obj1);
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj2);
// 通过，obj1 与 obj2 不深度相等

// assert.notDeepEqual(obj1, obj3);
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj4);
// 通过，obj1 与 obj4 不深度相等
```

## assert.notDeepStrictEqual(actual, expected[, message])
测试是否不深度全等。与assert.deepStrictEqual()相反。
```javascript
const assert = require('assert');

// assert.notDeepEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 通过
```

## assert.notEqual(actual, expected[, message])
使用不等运算符（!=）测试是否不相等。
```javascript
const assert = require('assert');

assert.notEqual(1, 2);
// 通过

// assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'
```

## assert.notStrictEqual(actual, expected[, message])
使用不全等运算符（!==）测试是否不全等。
```javascript
const assert = require('assert');

assert.notStrictEqual(1, 2);
// 通过

// assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 通过
```

## assert.ok(value[, message])
测试value是否为真值。相当于assert.equal(!!value, true, message)。
```javascript
const assert = require('assert');

assert.ok(true);
// 通过
assert.ok(1);
// 通过
// assert.ok(false);
// 抛出 "AssertionError: false == true"
// assert.ok(0);
// 抛出 "AssertionError: 0 == true"
assert.ok(false, '不是真值');
// 抛出 "AssertionError: 不是真值"
```

## assert.strictEqual(actual, expected[, message])
使用全等运算符（===）测试是否全等。
```javascript
const assert = require('assert');

// assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 通过

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'
```

## assert.throws(block[, error][, message])
期望block函数抛出错误。
```javascript
const assert = require('assert');

assert.throws(
    () => {
        throw new Error('错误信息');
    },
    Error
);
```