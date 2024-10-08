// export const books = [];
// import mongoose from 'mongoose';

// // Define the book schema
// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     minlength: 3
//   },
//   author: {
//     type: String,
//     required: true,
//     minlength: 3
//   },
//   publishedYear: {
//     type: Number,
//     required: true
//   }
// });

// // Create the Book model from the schema
// const Book = mongoose.model('Book', bookSchema);

// export default Book;



export const books = [];
import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  // author: {
  //   type: String,
  //   required: true,
  //   // minlength: 3
  // },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }, // Link to Author model
  publishedYear: {
    type: Number,
    required: true
  }
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;