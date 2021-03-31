const express = require("express");
const database = require("./database");

const app = express();
const port = 3000;
let names = [];
(async () => {
  await database.init();
  const data = await database.getAll();
  names = [...data];
})();
app.get("/", (req, res) => {
  const tableRows = names.map((db) => {
    return `<tr>
      <td>${db.id}</td>
      <td>${db.name}</td>
      <td>${new Date(db.created_at).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      })}</td>
    </tr>`;
  }).join("")
  let html = `
    <html>
      <header>
        <title>Fullcycle::Nginx Reverse Proxy + Node + MySQL + Docker</title>
        <style>
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }
        </style>
      </header>
      <body>
        <h1>Full Cycle Rocks!</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Nomes</th>
            <th>Data de Criação</th>
          </tr> 
          ${tableRows}
        </table>
      </body>
    </html>
  `;
  res.send(html);
});

app.get("/now", (req, res) => {
  res.send(`Date and Hour is ${new Date().toLocaleString()}`);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
