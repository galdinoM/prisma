const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
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
