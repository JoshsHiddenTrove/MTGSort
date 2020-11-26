var express = require('express');
var app = express();
const mtg = require('mtgsdk')

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
});

// Start the server on port 3000
app.listen(8080, '127.0.0.1');
console.log('Node server running on port 8080');
