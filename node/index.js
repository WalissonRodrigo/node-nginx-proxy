const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle running Node on Docker using nginx with proxy reverse!</h1>`);
});

app.get("/now", (req, res) => {
  res.send(`Date and Hour is ${new Date().toLocaleString()}`);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
