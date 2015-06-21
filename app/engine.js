console.log('Engine fired!');

EVENTS.on('hit', function (payload) {
    payload.res.end('Hey! ' + Date.now());
});