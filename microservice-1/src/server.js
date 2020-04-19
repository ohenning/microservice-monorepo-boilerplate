const http = require('http');

const requestListener = function (req, res) {
  console.log(req.url);
  res.writeHead(200);
    res.end('This is microservice 1');
}

const server = http.createServer(requestListener);
server.listen(8080);