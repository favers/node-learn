const assert = require('assert');

assert.deepEqual({ a: 1 }, { a: '1' });
// 通过，因为 1 == '1'

assert.deepStrictEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// 因为 1 !== '1' 使用全等运算符