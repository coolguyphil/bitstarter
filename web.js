var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var contents = fs.readFileSync('index.html', "utf-8");
  response.send(contents.toString('utf8'));	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
