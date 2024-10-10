export const books = [];
import mongoose from "mongoose";

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },

  author: {
    type: String,
    required: true,
    minlength: 3,
  },

  language: {
    type: String,
  },

  cover: {
    type: String,
  },

  publishedYear: {
    type: Number,
    required: true,
  },

  NumberOfPages: {
    type: Number,
  },

  genres: {
    type: String,
    required: true,
  },

  publisher: {
    type: String,
  },

  summary: {
    type: String,
    required: true,
  },
});

// Create the Book model from the schema
const Book = mongoose.model("Book", bookSchema);

export default Book;
