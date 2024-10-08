// import express from 'express';
// import bookRoutes from './routes/bookRoutes.js';
// import { errorHandler } from './middlewares/errorMiddleware.js';
// import cors from 'cors';


// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use(bookRoutes);

// app.use(errorHandler);

// export default app;



import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import cors from 'cors';
import mongoose from 'mongoose';
import authorRoute from './routes/authourRoutes.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use(bookRoutes);

app.use(errorHandler);

app.use('/api/authors, authorRoutes');

// await mongoose.connect(process.env.MONGO_URI)

export default app;