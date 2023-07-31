const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/* eslint-disable */
const stripe = require("stripe")("sk_test_51NZXGVSGyUMmynkIQK6bBxHxhTWQhvSSJkAeyutKvOqEOgAVgttQ5jdP22dUorUJR2Hqlz7anAQulWq06OQHNh3M00hy6lPhDQ");
/* eslint-inable */
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payment/create", async (request, response) => {
  const total = request.body.amount;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total, 10),
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret});
});

exports.api = functions.https.onRequest(app);
