// 포켓몬 데이터 (피카츄~꼬부기까지만) 배열로 작성
const pokemonArr = {
  0: "main",
  1: "pikachu",
  2: "raichu",
  3: "Charmander",
  4: "Squirtle",
};
const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);
  // index 0번 메인 페이지
  if (request.url === "/0") {
    const mainPage = `<html>
    <head><title>Main</title></head>
    <body>
      <h1>Main</h1>
    </body>
    </html>`;
    response.end(mainPage);
  }
  // index 1번 피카츄 페이지
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
  // index 2번 라이츄 페이지
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
  // index 3번 파이리 페이지
  if (request.url === "/3") {
    const pageCharmander = `<html>
    <head><title>Charmander</title></head>
    <body>
      <a href="http://localhost:1234/2">Previous</a> 
      <a href="http://localhost:1234/4">Next</a> 
      <h1>Charmander</h1>
    </body>
    </html>`;
    response.end(pageCharmander);
  }
  // index 4번 꼬부기 페이지
  if (request.url === "/4") {
    const pageSquirtle = `<html>
    <head><title>Squirtle</title></head>
    <body>
      <a href="http://localhost:1234/3">Previous</a> 
      <a href="http://localhost:1234/5">Next</a> 
      <h1>Squirtle</h1>
    </body>
    </html>`;
    response.end(pageSquirtle);
  }
  // 이전/다음 페이지가 없는 경우를 조건식으로 작성 -> 메인 페이지로 이동
  //! -> 실패해서 주석처리
  // if (response.writeHead(404)) {
  //   const response404 = `<html>
  // <head></head>
  // <body>
  //   <script>
  //   window.location.href = "http://localhost:1234/0";
  //   </script>
  // </body>
  // </html>`;
  //   response.end(response404);
  // }

  response.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(1234);
