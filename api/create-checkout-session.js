const Stripe = require('stripe');

const stripe = Stripe(
  process.env.STRIPE_SECRET_KEY
);

module.exports = async (req, res) => {

  if (req.method !== 'POST') {

    return res.status(405).json({
      error: 'Método no permitido'
    });

  }

  try {

    /* =========================
       DETECTAR URL
    ========================= */

    const baseUrl =
      process.env.FRONTEND_URL ||
      'http://localhost:4200';

    /* =========================
       STRIPE SESSION
    ========================= */

    const session =
      await stripe.checkout.sessions.create({

        payment_method_types: ['card'],

        mode: 'subscription',

        line_items: [
          {
            price:
              process.env.STRIPE_PRICE_ID_MONTHLY,

            quantity: 1,
          },
        ],

        success_url:
          `${baseUrl}/success`,

        cancel_url:
          `${baseUrl}/checkout`,
      });

    return res.status(200).json({
      url: session.url
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: 'Stripe error'
    });

  }

};