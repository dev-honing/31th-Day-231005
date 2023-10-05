const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  // 조건문 작성
  if (request.url === "/") {
    console.log("메인입니다.");
  }
  if (request.url === "/sub") {
    console.log("서브입니다.");
  }

  response.writeHead(200, { "Content-Type": "text/html" });
  // html의 구성을 doc로 변수 선언
  let doc = `<html>
      <head></head>
      <body>
        <h1>hello!</h1>
      </body>
    </html>`;

  response.end(doc);
});

server.listen(1234);
