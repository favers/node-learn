const os = require('os');

console.log('行末标志：',os.EOL);
console.log('CPU架构：',os.arch());
console.log('特定常量：',os.constants);
console.log('CPU信息：',os.cpus());
console.log('字节顺序：',os.endianness());
console.log('空闲内存：',os.freemem());
console.log('home目录：',os.homedir());
console.log('主机名：',os.hostname());
console.log('平均负载：',os.loadavg());
console.log('网络地址：',os.networkInterfaces());
console.log('操作系统：',os.platform());
console.log('发行版：',os.release());
console.log('临时文件目录：',os.tmpdir());
console.log('所有内存：',os.totalmem());
console.log('操作系统名字：',os.type());
console.log('上线时间：',os.uptime());
console.log('用户信息：',os.userInfo());