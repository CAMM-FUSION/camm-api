import express from 'express';
import { createAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from '../controllers/authorController.js';
const router = express.Router();


// POST - Add a new author
router.post('/authors', createAuthor);

// GET - Get all authors
router.get('/authors', getAuthors);

// GET - Get a single author by ID
router.get('/authors/:id', getAuthorById);

// PUT - Update an author by ID
router.patch('/authors/:id', updateAuthor);

// DELETE - Delete an author by ID
router.delete('/authors/:id', deleteAuthor);

export default router;
