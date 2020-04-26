const express = require('express');
const app = express();

app.get('/micro1', function (req, res) {
  res.send('This is Microservice 1!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});