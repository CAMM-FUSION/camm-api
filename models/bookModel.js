export const books = [];
import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },

  summary: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
    minlength: 3
  },

  cover: {
    type: String,
    required: true,
  },

  publishedYear: {
    type: Number,
    required: true,
  }
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;