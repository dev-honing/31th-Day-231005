const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(typeof response);

  response.writeHead(200, { "Content-Type": "text/html" });
  // html의 구성을 doc로 변수 선언
  let doc = `<html>
      <head></head>
      <body>
        <h1>hello!</h1>
      </body>
    </html>`;
  response.end(doc); //html 요소가 출력되는지 확인
});

server.listen(1234);
