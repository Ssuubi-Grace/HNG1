const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), digits.length), 0);
  return sum === num;
};

//function for perfect number check
const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

app.get("/api/classify-number", async (req, res) => {
  if (!req.query.number) {
    return res.status(400).json({ error: true, message: "Missing number parameter" });
  }

  const number = parseInt(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ error: true });
  }

  // Fetching fun fact from Numbers API
  let funFact = "No fact available";
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    funFact = response.data;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
  }

  const properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  res.json({
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: number.toString().split("").reduce((a, b) => a + parseInt(b), 0),
    fun_fact: funFact,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
