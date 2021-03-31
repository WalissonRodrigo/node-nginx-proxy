const config = {
  host: "mysql",
  port: "3306",
  user: "root",
  password: "root",
  database: "peoples",
};

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(config);
  console.log("Connected on MySQL!");
  global.connection = connection;
  return connection;
}

async function createDB() {
  const conn = await connect();
  const sqlCreate = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )  ENGINE=INNODB;
  `;
  await conn.query(sqlCreate);
}

async function seed() {
  try {
    const conn = await connect();
    const sqlInsert = `insert into people(name) values (?), (?), (?), (?);`;
    const values = [
      "Walisson",
      "Wesley Williams",
      "Luis Carlos",
      "Alunos FullCycler",
    ];
    const [rows] = await conn.query(sqlInsert, values);
  } catch (error) {
    console.log(error);
  }
}

async function getAll() {
  try {
    const conn = await connect();
    const sql = `select * from people;`;
    const [rows] = await conn.query(sql);
    return rows;
  } catch (error) {
    console.log(`peoples.people does't exist`);
    return [];
  }
}

async function init() {
  try {
    await createDB();
    const data = await getAll();
    if (!data || !data.length) {
      await seed();
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  init,
  getAll,
};
