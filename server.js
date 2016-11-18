var express = require('express');

var app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/build/index.html');
});

app.listen(8080);
