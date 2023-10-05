const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(typeof response);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("안녕!");
});

server.listen(1234);
