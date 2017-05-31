const path = require('path');

console.log(path.isAbsolute('/Users/favers/xxx.js'));
console.log(path.isAbsolute('/Users/favers/..'));
console.log(path.isAbsolute('favers'));
console.log(path.isAbsolute('./favers'));