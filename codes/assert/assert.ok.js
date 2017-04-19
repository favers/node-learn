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