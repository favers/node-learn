const assert = require('assert');

// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息