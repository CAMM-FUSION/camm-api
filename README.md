# Books API

A simple CRUD Books API using Node.js, Express, and ES Modules.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set the following variables:
   ```
   PORT=3000
   MONGO_URI
   ```
4. Run the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- **POST** `/books` - Add a new book
- **GET** `/books` - Get all books
- **GET** `/books/:id` - Get a book by ID
- **PATCH** `/books/:id` - Update a book
- **DELETE** `/books/:id` - Delete a book


## Testing

To run the tests:
```bash
npm test
