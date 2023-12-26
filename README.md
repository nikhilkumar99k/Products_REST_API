# Products_REST_API
## RESTful API Development, Middleware Implementation, Unit Testing, Documentation

## Overview
Project Description
This project is a simple CRUD (Create, Read, Update, Delete) API developed using Node.js and Express. The primary purpose of this API is to manage a list of products. It provides endpoints for performing various operations on the product data, such as retrieving a list of products, fetching details of a specific product by ID, adding new products, updating existing products, and deleting products.

Features
1. List of Products
Endpoint: /products
Method: GET
Description: Retrieve a list of all products.
2. Specific Product by ID
Endpoint: /products/:id
Method: GET
Description: Fetch details of a specific product by ID.
3. Add New Product
Endpoint: /products
Method: POST
Description: Add a new product to the list.
4. Update Product by ID
Endpoint: /products/:id
Method: PUT
Description: Update details of a specific product by ID.
5. Delete Product by ID
Endpoint: /products/:id
Method: DELETE
Description: Delete a specific product by ID.

## Installation
1. Clone the repository:
``` bash
git clone <https://github.com/nikhilkumar99k/ReturnJourney-Assig>
```
2. Install dependencies:
``` bash
npm install
```
3. Run the server:
``` bash
npm start
```
The server will be accessible at http://localhost:3000.
4. Explore API Endpoints:

Use tools like Postman to interact with the API endpoints. Refer to the provided API Endpoints section for details.

## Example Usage| Requests and Responses
``` 
Example 1: Retrieve List of Products
Request:
curl http://localhost:3000/products
Response:
[
{ “id”: 1, “name”: “bat”, “price”: 12.99 },
{ “id”: 2, “name”: “ball”, “price”: 8.49 },
// … other products
]

Example 2: Retrieve a Specific Product
Request:
curl http://localhost:3000/products/1
Response:
{ “id”: 1, “name”: “bat”, “price”: 12.99 }

Example 3: Add a New Product
Request:
curl -X POST -d “name=New Product&price=24.99” http://localhost:3000/products
Response:
{ “id”: 31, “name”: “New Product”, “price”: 24.99 }

Example 4: Update a Product
Request:
curl -X PUT -d “name=Updated Product&price=29.99” http://localhost:3000/products/31
Response:
{ “id”: 31, “name”: “Updated Product”, “price”: 29.99 }

Example 5: Delete a Product
Request:
curl -X DELETE http://localhost:3000/products/31
Response:
{} // Empty response for successful deletion
```
<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/c63b458a-a823-4180-8f86-1c07c9aee505" alt="s1" style="width:500px;">
<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/d8878297-8da6-4f66-9a7a-d0ce94e71795" alt="s2" style="width:500px;">

<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/b258c2b2-1b92-497b-82c6-6b719d1d6c72" alt="s3" style="width:500px;">
<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/d2ea77d5-7ddb-4f32-9572-2cfc1870e680" alt="s4" style="width:500px;">

<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/4f39cb94-cca2-4f8e-8071-738a35691a94" alt="s5" style="width:500px;">
<img src="https://github.com/nikhilkumar99k/ReturnJourney-Assig/assets/91065041/0740fd1a-9a21-43d1-9b9a-54059d1079cb" alt="s6" style="width:500px;">



## Middleware Functionality
In addition to basic CRUD operations, this Express API incorporates middleware functionality to enhance request handling. The middleware used in this project logs details about incoming requests, providing insights into the timing, method, and URL of each request.
``` bash
// Logging Middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
});

// Body Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));

``` 

## API Documentation
"Unlock the Power of Our API: Dive into the Details! 🚀 Click [here](https://docs.google.com/document/d/16nZBDEL4rgJ7cVjYMNjH4QSe-5wupCvTYhJSRWb9BcU/edit?usp=sharing) to discover the seamless integration possibilities and step-by-step usage instructions in our comprehensive API Documentation."

🚀 [Click here](https://docs.google.com/document/d/16nZBDEL4rgJ7cVjYMNjH4QSe-5wupCvTYhJSRWb9BcU/edit?usp=sharing) 

## Conclusion
This Express CRUD API serves as a foundational project for understanding and implementing basic CRUD operations in a Node.js environment. It can be extended and customized to suit the requirements of more complex applications. The provided API endpoints and usage examples aim to facilitate quick testing and integration into other applications.
