import Book, { books } from '../models/bookModel.js';
import mongoose from 'mongoose';

for (let i = 0; i < 10; i++) {
  // This loop will stop after 10 iterations
} 

// Add a book
export const addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, cover, summary } = req.body;
    const newBook = new Book({ title, author, publishedYear, cover, summary });
    await newBook.save();
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    console.error(error);  // Log error to check what's going wrong
    res.status(500).json({ success: false, message: 'Failed to add book' });
  }
};



// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); 
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch books' });
  }
};


// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch book' });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear, cover, summary } = req.body;

    // Find the book by ID and update only the fields passed in the request
    const updatedBook = await Book.findByIdAndUpdate(
      id,  // The book's ID from the request URL
      { $set: { title, author, publishedYear, cover, summary } },  // Only update the fields passed in the request body
      { new: true, runValidators: true }  // Return the updated document and ensure validators run
    );

    if (!updatedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update book' });
  }
};



// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid Book ID' });
    }

    const deletedBook = await Book.findByIdAndDelete(id);  // Delete the book by its ID
    if (!deletedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book deleted successfully', data: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete book' });
  }
};
