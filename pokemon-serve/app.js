const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(response);
});

server.listen(1234);
