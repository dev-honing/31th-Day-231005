const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  // 피카츄
  if (request.url === "/pikachu") {
    const pagePikachu = `<html>
    <head><title>Pikachu</title></head>
    <body>
      <a href="http://localhost:1234/sub">Go to SubPage</a>
      <h1>Pikachu</h1>
    </body>
  </html>`;
    response.end(pagePikachu);
  }
  // 라이츄
  if (request.url === "/raichu") {
    const pageRaichu = `<html>
    <head><title>Raichu</title></head>
    <body>
      <a href="http://localhost:1234/">Go to MainPage</a> 
      <h1>Raichu</h1>
    </body>
  </html>`;
    response.end(pageRaichu);
  }

  response.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(1234);
