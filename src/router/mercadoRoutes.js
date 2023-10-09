const express = require("express");
const router = express.Router();
const db = require("../db/db");
const { PrismaClient } = require("@prisma/client");
const pagamento = require("../controller/mercadoController");

router.post("/pagamento", async (req, res) => {
  const { nome, sobrenome, email, telefone, valor } = req.body;

  try {
    const initPoint = await pagamento(nome, sobrenome, email, telefone, valor);
    res.redirect(initPoint);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error ao iniciar o pagamento");
  }
});

module.exports = router;
