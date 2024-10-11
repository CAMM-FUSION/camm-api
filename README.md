# Books API

A Library API for managing books. This API allows admins to create, read, update, and delete books in the library

## Setup

1. Clone the repository https://github.com/CAMM-FUSION.
2.
   Run the commands below from the terminal to  install the required packages and dependencies:

   npm install
   npm cors
   npm  express
   npm  mongoose
   npm  joi
   npm  dotenv
   npm  mongodb
   npm  bcrypt:  library for hashing passwords
   npm  jsonwebtoken(JWT):  JWTs are used for securely transmitting information between parties as a JSON object
   npm  url
   npm nodemon
   ```
3. Create a `.env` file and set the following variables:
   ````````````````````````````````````````````````````
   PORT=3000
   MONGO_URI
   JWT_SECRET
   
4. Create a `.gitignore` file and  add the following lines:
   ```````````````````````````````````````````````````````
   .env
   node_modules/
   package-lock.json


5. Run the command below in the  terminal to start the server:

   npm run dev


## API Endpoints

## BOOK Endpoints
- **POST** `/books` - Add a new book
- **GET** `/books` - Get all books
- **GET** `/books/:id` - Get a book by ID
- **PATCH** `/books/:id` - Update a book by ID
- **DELETE** `/books/:id` - Delete a book by ID

## AUTHORS Endpoints
- **POST** `/authors` - Add a new author
- **GET** `/authors` - Get all authors
- **GET** `/authors/:id` - Get an author by ID
- **PATCH** `/authors/:id` - Update an author by ID
- **DELETE** `/authors/:id` - Delete an author by ID

## REVIEWS Endpoints
- **POST** `/reviews` - Add a new review
- **GET** `/reviews` - Get all reviews
- **GET** `/reviews/:id` - Get a review by ID
- **PATCH** `/reviews/:id` - Update a review by ID
- **DELETE** `/reviews/:id` - Delete a review by ID

## USERS Endpoints
- **POST** `/register` -Register a new user
- **POST** `/login` -User login


