const express = require("express");
const bodyParser = require("body-parser");
const viagemRoutes = require("./router/viagemRoutes");
const mercadoRoutes = require("./router/mercadoRoutes");
const fs = require("fs").promises;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(viagemRoutes);

const mercadoRoutes = require("./router/mercadoRoutes");
app.use("/pagamento", mercadoRoutes);

app.use((req, res, next) => {
  res.status(404).send("Rota não encontrada.");
});

// async function verificarEPrepararLog() {
//   const fileLog = "log.txt";

//   try {
//     await fs.access(fileLog, fs.constants.F_OK);
//     console.log("Arquivo de log já existe.");
//   } catch (err) {
//     try {
//       await fs.writeFile(fileLog, "");
//       console.log("Arquivo criado com sucesso.");
//     } catch (err) {
//       console.log("Error ao criar o arquivo de log:", err);
//     }
//   }
// }

// verificarEPrepararLog();
// console.log("Service running");

// async function gravarLog(message) {
//   try {
//     const dataHoraAtual = new Date().toLocaleString();
//     const messageFormatada = `${dataHoraAtual} - ${message}\n`;

//     await fs.appendFile("log.txt", messageFormatada, { flag: "a" });
//     console.log("Mensagem de log gravada com sucesso");
//   } catch (err) {
//     console.error("Error ao gravar mensagem de log:", err);
//   }
// }

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀HTTP server esta ativado ${port}`);
});
