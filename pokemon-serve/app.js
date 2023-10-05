const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  // 피카츄
  if (request.url === "/1") {
    const pagePikachu = `<html>
    <head><title>Pikachu</title></head>
    <body>
      <a href="http://localhost:1234/0">Previous</a>
      <a href="http://localhost:1234/2">Next</a>
      <h1>Pikachu</h1>
    </body>
  </html>`;
    response.end(pagePikachu);
  }
  // 라이츄
  if (request.url === "/2") {
    const pageRaichu = `<html>
    <head><title>Raichu</title></head>
    <body>
      <a href="http://localhost:1234/1">Previous</a> 
      <a href="http://localhost:1234/3">Next</a> 
      <h1>Raichu</h1>
    </body>
  </html>`;
    response.end(pageRaichu);
  }

  response.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(1234);
