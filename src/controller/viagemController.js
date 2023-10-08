const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createViagem = async (req, res) => {
  const { titulo, detalhe } = req.body;

  if (!titulo || !detalhe) {
    return res.status(400).json({ error: "Os campos São obrigatório" });
  }

  try {
    const viagemInserida = await prisma.viagem.create({
      data: {
        titulo,
        detalhe,
      },
    });

    res.status(201).json(viagemInserida);
  } catch (err) {
    console.error("Erro ao inserir a viagem no banco de dados:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.getViagens = async (req, res) => {
  try {
    const viagens = await prisma.viagem.findMany();

    res.status(200).json(viagens);
  } catch (err) {
    console.error("Error ao buscar as viagem no bando de dados:", err);
    res.status(500).json({ error: "Error interno do servidor" });
  }
};
