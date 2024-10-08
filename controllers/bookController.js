import Book, { books } from '../models/bookModel.js';

for (let i = 0; i < 10; i++) {
  // This loop will stop after 10 iterations
} 

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
export const getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  res.status(200).json({ success: true, data: books });
};

// Update book details
export const updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  
  const { title, author, publishedYear } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.publishedYear = publishedYear || book.publishedYear;

  res.status(200).json({ success: true, data: books });
};

// Delete a book
export const deleteBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ success: false, message: 'Book not found' });

  book.splice(bookIndex, 1);
  res.status(200).json({ success: true, message: 'Book deleted' });
};