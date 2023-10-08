const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("Error ao conectar ao bando de dados:", err);
    return;
  }
  console.log("Conexão com o banco de dados Mysql estabelecida");
});

module.exports = db;
