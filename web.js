var fs = require('fs');
var buf = require('buffer');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  index_content = buf.toString('utf8',0,fs.readFileSync("index.html"));
  response.send(index_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
