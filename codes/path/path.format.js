const path = require('path');
let pathName = '';

// 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
pathName = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(pathName);
// 返回: '/home/user/dir/file.txt'

// 如果没有指定 `dir`，则 `root` 会被使用。
// 如果只提供了 `root` 或 `dir` 等于 `root`，则平台的分隔符不会被包含。
// `ext` 会被忽略。
pathName = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
});
console.log(pathName);
// 返回: '/file.txt'

// 如果没有指定 `base`，则 `name` + `ext` 会被使用。
pathName = path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
});
console.log(pathName);
// 返回: '/file.txt'
