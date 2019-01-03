var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
  res.status(200).send({
    status: 200,
    message: 'app created successfully'
  })
});

app.listen(5050, function () {console.log('server running on port 5050')});