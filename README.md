HNG Backend API - Stage 1 Task


# Task 1: Number Classifier API

## Overview
This project is part of the Stage 1 Task in the HNG internship program. The **Number Classifier API** is built using Node.js and Express. It classifies a number based on several criteria and returns detailed information about the number. The API checks if the number is prime, perfect, Armstrong, and whether it is odd or even. Additionally, it calculates the sum of the number's digits and fetches a fun fact from the Numbers API.

### Key Features:
- **Prime Check**: Determines if the number is prime.
- **Perfect Number**: Identifies whether the number is a perfect number.
- **Armstrong Number**: Determines if the number is an Armstrong number.
- **Odd or Even**: Classifies the number as odd or even.
- **Sum of Digits**: Computes the sum of all digits in the number.
- **Fun Fact**: Provides a fun fact about the number from the Numbers API.

##  How to Use

### Remote Deployment (Live API)
To classify a number using the remote deployed API, make a GET request to the following endpoint:

GET https://number-classifier-api-lzz8.onrender.com/api/classify-number?number=371


#### Parameters:
- `number`: The number you want to classify. Replace `371` with any number.

#### Example Request:
GET https://number-classifier-api-lzz8.onrender.com/api/classify-number?number=371

#### Example Response:
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["odd", "armstrong"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number, meaning the sum of its digits raised to the power of 3 equals the number itself."
}

