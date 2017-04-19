const assert = require('assert');

assert.ifError(0);
// 通过
// assert.ifError(1);
// 抛出 1
// assert.ifError('error');
// 抛出 'error'
assert.ifError(new Error());
// 抛出 Error
