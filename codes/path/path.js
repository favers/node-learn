const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
// posix 输出C:\temp\myfile.html
// windows 输出myfile.html

console.log(path.win32.basename('C:\\temp\\myfile.html'));
// 输出myfile.html