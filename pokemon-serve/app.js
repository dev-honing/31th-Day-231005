// 포켓몬 데이터 (피카츄~꼬부기까지만) 배열로 작성
// ! 나중에 배열로 리팩터링 도전

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
    <head>
    <meta charset="UTF-8">
    <title>메인</title>
    <style>
    *{margin: 0;
      padding: 0;
    }
    #root {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    #root div {
      display: flex;
      align-items: center;
      border: #000 solid 3px;
      border-radius: 5%;
      width: 30vw;
      height: 3vh;
    }
    #root > div:nth-child(1) {
      background-color : #FFD733;
    }
    #root > div:nth-child(2) {
      background-color : #FFD733;
    }
    #root > div:nth-child(3) {
      background-color: #FF7327;
    }
    #root > div:nth-child(4) {
      background-color : #4FD9FF;
    }

    </style>
    </head>
    <body>
      <div id="root">
        <div>
          <a href="http://localhost:1234/1">피카츄</a>
        </div>
        <div>
          <a href="http://localhost:1234/2">라이츄</a>
        </div>
        <div>
          <a href="http://localhost:1234/3">파이리</a>
        </div>
        <div>
          <a href="http://localhost:1234/4">꼬부기</a>
        </div>
      </div>
    </body>
    </html>`;
    response.end(mainPage);
  }
  // index 1번 피카츄 페이지
  if (request.url === "/1") {
    const pagePikachu = `<html>
    <head>
    <meta charset="UTF-8">
    <title>피카츄</title></head>
    <body>
      <h1>피카츄</h1>
      <a href="http://localhost:1234/0">Previous</a>
      <a href="http://localhost:1234/2">Next</a>
    </body>
    </html>`;
    response.end(pagePikachu);
  }
  // index 2번 라이츄 페이지
  if (request.url === "/2") {
    const pageRaichu = `<html>
    <head>
    <meta charset="UTF-8">
    <title>라이츄</title></head>
    <body>
      <h1>라이츄</h1>
      <a href="http://localhost:1234/1">Previous</a> 
      <a href="http://localhost:1234/3">Next</a> 
    </body>
    </html>`;
    response.end(pageRaichu);
  }
  // index 3번 파이리 페이지
  if (request.url === "/3") {
    const pageCharmander = `<html>
    <head>
    <meta charset="UTF-8">
    <title>파이리</title></head>
    <body>
      <h1>파이리</h1>
      <a href="http://localhost:1234/2">Previous</a> 
      <a href="http://localhost:1234/4">Next</a> 
    </body>
    </html>`;
    response.end(pageCharmander);
  }
  // index 4번 꼬부기 페이지
  if (request.url === "/4") {
    const pageSquirtle = `<html>
    <head>
    <meta charset="UTF-8">
    <title>꼬부기</title></head>
    <body>
      <h1>꼬부기</h1>
      <a href="http://localhost:1234/3">Previous</a> 
      <a href="http://localhost:1234/0">Next</a> 
    </body>
    </html>`;
    response.end(pageSquirtle);
  }
  // 이전/다음 페이지가 없는 경우를 조건식으로 작성 -> 메인 페이지로 이동
  //! -> 실패해서 주석처리
  // if (response.writeHead(404)) {}
  // ContentType 객체를 변수 선언
  // const ContentType = { "Content-Type": "text/html" };
  // if (response.statusCode === 200) {
  //   response.writeHead(200, ContentType);
  // } else {
  //   const response404 = `<html>
  //       <head></head>
  //       <body>
  //         <script>
  //         window.location.href = "http://localhost:1234/0";
  //         </script>
  //       </body>
  //       </html>`;
  //   response.end(response404);
  // }
});

server.listen(1234);
