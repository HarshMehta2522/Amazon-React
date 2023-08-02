const express = require("express");
const stripe = require("stripe")(
  "sk_test_51NZXGVSGyUMmynkIQK6bBxHxhTWQhvSSJkAeyutKvOqEOgAVgttQ5jdP22dUorUJR2Hqlz7anAQulWq06OQHNh3M00hy6lPhDQ"
);
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/health-check", (req, res) => {
  res.send("Working").status(200);
});

app.post("/payment/create", async (req, response) => {
  console.log(req.body);
  const total = req.body.amount;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total, 10),
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});
