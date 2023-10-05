const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(typeof response);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("안녕!");
});

server.listen(1234);
// localhost:1234로 접속하면 �덈뀞!이 출력됨;
