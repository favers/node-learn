const assert = require('assert');

assert.doesNotThrow(
    () => {
        throw new TypeError('错误');
    },
    SyntaxError
);