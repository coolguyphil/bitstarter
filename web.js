var express = require('express');
var app = express();
//app.use(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //var htmlfile = "index.html";
  var contents = fs.readFileSync('index2.html').toString();
  response.send(contents);	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
