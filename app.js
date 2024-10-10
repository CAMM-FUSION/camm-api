import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

const app = express();


app.use(express.json());

app.use(bookRoutes);

app.use(errorHandler);

app.use('/api/authors, authorRoutes');

// await mongoose.connect(process.env.MONGO_URI)

export default app;