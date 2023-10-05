const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  // html의 구성을 doc로 변수 선언
  let doc = `<html>
      <head></head>
      <body>
        <h1>hello!</h1>
      </body>
    </html>`;

  // 조건문 작성을 통한 응답을 2가지로 만들어 멀티 페이지 구성
  // 메인페이지
  if (request.url === "/") {
    response.end(`<html>
      <head></head>
      <body>
        <h1>Main Page</h1>
      </body>
    </html>`);
  }
  // 서브페이지
  if (request.url === "/sub") {
    response.end(`<html>
      <head></head>
      <body>
        <h1>Sub Page</h1>
      </body>
    </html>`);
  }

  response.writeHead(200, { "Content-Type": "text/html" });

  // response.end(doc);
});

server.listen(1234);
