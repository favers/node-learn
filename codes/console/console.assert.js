// 原生测试
// console.assert(true, 'favers test');
// console.assert(false, '测试没有通过');
// console.log('后面不执行');

// 自定义console测试
const console = require('./myConsole');

console.assert(true, 'favers test');
console.assert(false, '测试没有通过');
console.log('后面还是可以执行');