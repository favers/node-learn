const querystring = require('querystring');

console.log(querystring.parse('test%2Ffavers'));
// { 'test/favers': '' }