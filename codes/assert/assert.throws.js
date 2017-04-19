const assert = require('assert');

assert.throws(
    () => {
        throw new Error('错误信息');
    },
    Error
);