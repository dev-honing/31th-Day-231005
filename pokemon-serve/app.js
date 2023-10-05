const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  // 조건문 작성
  if (request.url === "/") {
    console.log("메인입니다."); // 주소창에 localhost:1234를 입력해 접속하면 "메인입니다."가 출력
  }
  if (request.url === "/sub") {
    console.log("서브입니다."); // 주소창에 localhost:1234/sub를 입력해 접속하면 "서브입니다."가 출력
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
