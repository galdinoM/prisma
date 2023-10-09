const mercadopago = require("mercadopago");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

mercadopago.configure({
  access_token:
    "TEST-4713283239157394-101013-153105beb5901ea0839affcc7cb53e78-359291877",
});

async function pagamento(nome, sobrenome, email, telefone, valor) {
  const preference = {
    items: [
      {
        title: "Produto",
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(valor),
      },
    ],
    payer: {
      name: nome,
      surname: sobrenome,
      email: email,
      phone: {
        number: telefone,
      },
    },
  };

  try {
    const response = await mercadopago.preference.create(preference);
    await prisma.pagamento.create({
      data: {
        token: response.body.id,
        nome,
        sobrenome,
        email,
        telefone,
        valor,
      },
    });
    return response.body.init_point;
  } catch (error) {
    throw error;
  }
}

module.exports = { pagamento };
