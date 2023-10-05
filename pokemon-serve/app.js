const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(typeof response);
});

server.listen(1234);
