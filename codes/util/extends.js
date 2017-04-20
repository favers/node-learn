const EventEmitter = require('events');

class MyStream extends EventEmitter {
    constructor() {
        super();
    }
    write(data) {
        this.emit('data', data);
    }
}

const stream = new MyStream();

console.log(stream instanceof EventEmitter);
console.log(MyStream.super_ === EventEmitter); 

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('使用 ES6');