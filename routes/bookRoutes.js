import express from 'express';
import { addBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController.js';
import { validateBook } from '../middlewares/validateBook.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post('/books', upload.single('cover'),validateBook, addBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.patch('/books/:id', validateBook, updateBook);
router.delete('/books/:id', deleteBook);





export default router;