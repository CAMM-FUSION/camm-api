import { books } from '../models/bookModel.js';

// Add a new book
export const addBook = (req, res, next) => {

  try {
    const { title, author, Year } = req.body;
  const newBook = { id: books.length + 1, title, author, Year };
  books.push(newBook);
  res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    next(error);
  }
};

// Get all books
export const getAllBooks = (req, res) => {
  res.status(200).json({ success: true, data: books });
};

// Get book by ID
export const getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  res.status(200).json({ success: true, data: book });
};

// Update book details
export const updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  
  const { title, author, Year } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.Year = Year || book.Year;

  res.status(200).json({ success: true, data: book });
};

// Delete a book
export const deleteBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ success: false, message: 'Book not found' });

  books.splice(bookIndex, 1);
  res.status(200).json({ success: true, message: 'Book deleted' });
};
