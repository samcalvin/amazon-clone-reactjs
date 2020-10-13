const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYNFCFrbNpy7gaiW3tLC5EI1aAlfnIiA3QJ29C7hftHv8XoqrlyzSZRZxsOgfio6ZHFPwsdLkwNkOLMzy31Wgu600hmUaVONF"
);

// API (to set up an API we need the structure below: )

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/chef", (request, response) =>
  response.status(200).send("whats up Chef, greetings from API test world")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // nice debugging line for us
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  // copy our paymentIntent code snippet from payment.js
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-bbe18/us-central1/api
