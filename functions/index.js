const express = require("express");
const stripe = require("stripe")(
  "sk_test_51NZXGVSGyUMmynkIQK6bBxHxhTWQhvSSJkAeyutKvOqEOgAVgttQ5jdP22dUorUJR2Hqlz7anAQulWq06OQHNh3M00hy6lPhDQ"
);
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));
const router=require('./routes/router.js')
app.use('/api',router)

app.listen(5000, () => {
  console.log("Running on port 5000");
});
