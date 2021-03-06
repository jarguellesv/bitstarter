var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

