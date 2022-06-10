// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("홈페이지 입니다 !");
// });

// app.get("/r/:subreddit", (req, res) => {
//   const { subreddit } = req.params;
//   res.send(`<h1>Browsing the ${subreddit} subreddit`);
// });

// app.get("/r/:subreddit/:postId", (req, res) => {
//   const { subreddit, postId } = req.params;
//   res.send(`<h1>Browsing the ${subreddit} subreddit, ${postId} postId`);
// });

// app.post("/cats", (req, res) => {
//   res.send("cats post request!!?");
// });

// app.get("/cats", (req, res) => {
//   res.send("MEOW!!");
// });

// app.get("/dogs", (req, res) => {
//   res.send("WOOF!");
// });

// app.get("/search", (req, res) => {
//   const { q } = req.query;
//   if (!q) {
//     res.send("검색 결과가 없습니다.");
//   } else {
//     res.send(`<h1>검색 결과: ${q}</h1>`);
//   }
// });

// app.get("*", (req, res) => {
//   res.send(`i don't know that path!`);
// });

// app.listen(3000, () => {
//   console.log("LISTENING ON PORT 3000!");
// });

const express = require("express");
const app = express();

app.listen(3000, (req, res) => {
  console.log("서버 오픈");
});

app.get("/", (req, res) => {
  res.send("홈페이지!");
});

app.get("/dog/:something", (req, res) => {
  const { something } = req.params;
  res.send(`PARAMS: ${something}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.send("검색 결과가 없습니다.");
  } else {
    res.send(`<h1>검색 결과: ${q}</h1>`);
  }
});

app.get("*", (req, res) => {
  res.send(`<h1>잘못된 요청 입니다.</h1>`);
});
