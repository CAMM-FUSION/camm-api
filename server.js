import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import reviewRoutes from "./routes/reviewRoutes.js";
import { errorHandler } from './middlewares/errorMiddleware.js';
import path from  'path';
import { fileURLToPath } from 'url';
import authorRoutes from "./routes/authorRoutes.js";
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());

// Use the book routes without /api prefix
app.use(bookRoutes);
app.use(reviewRoutes);
app.use(authorRoutes);
app.use(authRoutes);
// app.use(bookRoutes);
// app.use('/api/authors, authorRoutes');

// Files from upload directory
const __filename = fileURLToPath(import.meta.url);  // Get the filename
const __dirname = path.dirname(__filename);  // Get the directory nam
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;