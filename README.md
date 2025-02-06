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
Local Deployment (On Your Machine)
To run the API locally on your machine, follow these steps:

Clone the repository:


git clone https://github.com/Ssuubi-Grace/Number-Classifier-API.git
cd Number-Classifier-API
Install Dependencies: Make sure Node.js and npm are installed on your system. Then, install the necessary dependencies:


npm install
Start the Server: Run the server using:


npm start
This will start the API locally at http://localhost:3000.

Test the Local API: To classify a number locally, make a GET request to:


GET http://localhost:3000/api/classify-number?number=371
Example Response (Local):
The response will be the same as the remote response, depending on the number you provide.

Response Fields:
is_prime: true or false, depending on whether the number is prime.
is_perfect: true or false, depending on whether the number is perfect.
properties: An array containing properties like "odd", "even", or "armstrong".
digit_sum: The sum of the digits of the number.
fun_fact: A fun fact about the number, fetched from the Numbers API.

Technologies Used
Express: A minimal and flexible Node.js web application framework used to build the API.
Axios: Promise-based HTTP client for making requests, used here to fetch fun facts about the number from the Numbers API.
CORS: Middleware to allow cross-origin requests from web applications.

Setup and Installation
Local Setup:
Clone the repository:


git clone https://github.com/Ssuubi-Grace/Number-Classifier-API.git
cd Number-Classifier-API
Install Dependencies: Make sure Node.js and npm are installed on your system. Then, install the necessary dependencies:

npm install
Start the Server: Run the server locally using:

npm start
The server will be running at http://localhost:3000.
