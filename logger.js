// console.log(__filename);
// console.log(__dirname);

var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // callback on the logging event
        // this.on('logging', function(data) {
        //     // send an HTTP request
        //     console.log(data.message);
        // });
        // raise the logging event
        console.log(message);
        this.emit('logging', {id: 1});
    }
}

module.exports = Logger;