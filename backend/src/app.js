import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routers/auth.router.js';
import connectdb from './config/database.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to DB
connectdb();

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173', // ✅ Allow requests from frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // ✅ Explicitly allow these methods
    credentials: true, // ✅ Allow cookies/auth headers
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/user', userRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
