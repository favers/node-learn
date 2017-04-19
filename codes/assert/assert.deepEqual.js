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
