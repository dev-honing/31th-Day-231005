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
    const mainPage = `<html>
    <head><title>Main Page</title></head>
    <body>
      <a href="http://localhost:1234/sub">Go to SubPage</a>
      <h1>Welcome! This is Main Page</h1>
    </body>
  </html>`;
    response.end(mainPage);
  }
  // 서브페이지
  if (request.url === "/sub") {
    const subPage = `<html>
    <head><title>Sub Page</title></head>
    <body>
      <a href="http://localhost:1234/">Go to MainPage</a> 
      <h1>Welcome! This is Sub Page</h1>
    </body>
  </html>`;
    response.end(subPage);
  }

  response.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(1234);
