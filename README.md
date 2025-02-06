
Number Classifier API

This Number Classifier API allows you to classify a number and retrieve details about its properties. It checks several aspects of the number, including whether it is prime, perfect, Armstrong, and even or odd. The API also calculates the sum of the number's digits and provides a fun fact about the number using the Numbers API.
Key Features:
Prime Check: Determines if the number is a prime number.
Perfect Number: Checks if the number is a perfect number (a number equal to the sum of its proper divisors).
Armstrong Number: Identifies if the number is an Armstrong number (a number that is equal to the sum of its own digits raised to the power of the number of digits).
Odd or Even: Classifies the number as odd or even.
Sum of Digits: Computes the sum of all digits in the number.
Fun Fact: Retrieves a fun fact about the number from the Numbers API.

How to Use

To classify a number, make a GET request to the following endpoint:
GET https://your-api-url.com/api/classify-number?number=371
Parameters:
number: The number you want to classify. Replace 371 with the number you wish to analyze.
Example Request:
GET https://your-api-url.com/api/classify-number?number=371
Example Response:
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["odd", "armstrong"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number, meaning the sum of its digits raised to the power of 3 equals the number itself."
}
Properties:
is_prime: true or false, depending on whether the number is prime.
is_perfect: true or false, depending on whether the number is perfect.
properties: An array containing properties such as "odd", "even", or "armstrong".
digit_sum: The sum of the digits of the number.
fun_fact: A fun fact about the number, fetched from the Numbers API.

Technologies Used

Express: Web framework for Node.js that allows you to build APIs easily.
Axios: Promise-based HTTP client for the browser and Node.js to make requests (used to fetch the fun fact from Numbers API).
CORS: Middleware to enable cross-origin resource sharing, allowing your API to be accessed from different origins.

Setup and Installation

1. Clone the repository
git clone https://github.com/Ssuubi-Grace/Number-Classifier-API.git
cd Number-Classifier-API
2. Install Dependencies
Make sure Node.js and npm are installed on your system. Then, install the necessary dependencies:
npm install
3. Start the Server
Run the server using:
npm start
The server will be accessible at http://localhost:3000.
