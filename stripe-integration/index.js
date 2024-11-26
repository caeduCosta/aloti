const express = require("express");
const path = require("path");
const stripe = require("stripe")("pk_test_51Q54ebHrz2GBBcz76zEGhQdrweVZQ8qQuhjUglWIa1brSBRmkTqOcAeRIrA9Qa4bvJ8eBUQoofbvw98WvP1JGQOr00Kwn7FkF5");
const cors = require("cors");


// Inicializa o servidor Express
const app = express();
app.use(express.json()); // Para processar JSON
app.use(cors()); // Habilita CORS para permitir requisições de front-end

// Configura o diretório de arquivos estáticos (public)
app.use(express.static(path.resolve(__dirname, "../public")));

// Rota para criar um pagamento
app.post("/create-checkout-session", async (req, res) => {
  const { amount, currency, description } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Tipos de pagamento permitidos
      line_items: [
        {
          price_data: {
            currency: "brl", // Define a moeda (BRL para Real)
            product_data: {
              name: "Serviço de profissional Aloti",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment", // Tipo de pagamento
      success_url: "http://localhost:4242/user-idoso/contrato/success.html",
      cancel_url: "http://localhost:4242/user-idoso/contrato/cancel.html",
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Inicia o servidor
const PORT = 4242;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
