var port = process.env.PORT || process.env.port || 8083,
    eventEmitter = require('events');


// Global event emitter
EVENTS = new eventEmitter.EventEmitter();


// Import
require('./app/engine.js');


// Listen for HTTP requests
require('http').createServer(function (req, res) {
    EVENTS.emit('hit', {
        req                 : req,
        res                 : res,
        requestStarted      : Date.now(),
        httpStatus          : 200,
        httpHeaderSent      : false
    });
}).listen(port);

console.log('Listening on port ' + port);