const express = require("express");
const router = express.Router();
const db = require("../db/db");
const { PrismaClient } = require("@prisma/client");
const viagemController = require("../controller/viagemController");

router.post("/viagens", viagemController.createViagem);

router.get("/viagens", viagemController.getViagens);

module.exports = router;
