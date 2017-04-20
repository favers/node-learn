const querystring = require('querystring');

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// foo=bar&baz=qux&baz=quux&corge=

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }, ':', ';'));
// foo;bar:baz;qux:baz;quux:corge;