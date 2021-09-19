// module
// var logger = require('./logger');

// console.log(module)

// path
// const path = require('path');

// const file = path.parse(__filename);

// console.log(path)

// os
// const os = require('os')

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// filesystem
// const fs = require('fs');

// const files = fs.readdir('./', (err, files) => {
//     if (err) console.log('error ', err);
//     else console.log('files ', files);
// });

// events
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', (arg) => console.log('message logged', arg));

// emitter.emit('messageLogged', {id: 1, url: 'http://'});
// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('logging', arg => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

// http
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', socket => {
    console.log('new connection');
})

server.listen(3000);
console.log('listening on port 3000...');
