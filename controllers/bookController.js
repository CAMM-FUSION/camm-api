import Book from '../models/bookModel.js';
import mongoose from 'mongoose';

// for (let i = 0; i < 10; i++) {
//   // This loop will stop after 10 iterations
// } 


// Search books
export const searchBooks = async (req, res) => {
  try {
    const { title, author, year } = req.query;
    let query = {};

    // Add regular expression-based search conditions
    if (title) query.title = { $regex: title, $options: 'i' };
    if (author) query.author = { $regex: author, $options: 'i' };
    if (year) query.year = year; 

    // Fetch books from the database based on query
    const books = await Book.find(query);

    // Return the found books
    res.status(200).json(books);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
};



// Add a new book with cover image
export const addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, summary, NumberOfPages, genres, publisher,language, cover } = req.body;

    // Create a new book object with image path
    const newBook = new Book({
      title,
      author,
      publishedYear,
      summary,
      cover, // Store the path to the uploaded cover image
      NumberOfPages,
      genres,
      publisher,
      language
    });

    // Save the new book to the database
    await newBook.save();

    // Send a response with the newly created book
    res.status(201).json({ success: true, message: 'Book added successfully', data: newBook });
  } catch (error) {
    console.error(error);
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

// Update an existing book with a new cover image (if provided)
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear, summary, language, NumberOfPages, genres, publisher, cover } = req.body;

    // Validate MongoDB ObjectId (in case it's invalid)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid Book ID' });
    }


    // Prepare the updated data (only update fields that are provided)
    const updatedData = {
      title: title || undefined,
      author: author || undefined,
      publishedYear: publishedYear || undefined,
      summary: summary || undefined,
      cover: cover|| undefined,  // Only update if a new image was uploaded
      language: language || undefined,
      NumberOfPages: NumberOfPages || undefined,
      genres: genres || undefined,
      publisher: publisher || undefined
    };

    // Find the book by ID and update it
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    if (!updatedBook) return res.status(404).json({ success: false, message: 'Book not found' });

    // Send the updated book data
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

