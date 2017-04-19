const assert = require('assert');

// assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 通过

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'
