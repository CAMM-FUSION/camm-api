import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors());

app.use(express.json());

app.use(bookRoutes);

app.use(errorHandler);

// await mongoose.connect(process.env.MONGO_URI)

export default app;
