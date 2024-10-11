import express from 'express';
import { register, login } from '../controllers/authController.js'; // Adjust path as necessary

const router = express.Router();

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

export default router;
