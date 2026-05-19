require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();

app.use(cors());

app.use(express.json());

const stripe = Stripe(
  process.env.STRIPE_SECRET_KEY
);

app.post(
  '/create-checkout-session',
  async (req, res) => {

    try {

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
            'http://localhost:4200/success',

          cancel_url:
            'http://localhost:4200/checkout',
        });

      res.json({
        url: session.url
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Stripe error'
      });

    }

  }
);

app.listen(3000, () => {

  console.log(
    'Servidor Stripe corriendo en puerto 3000'
  );

});