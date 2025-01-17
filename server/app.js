/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import cookieParser from 'cookie-parser';
// import cors from "cors";
import express from 'express';

// Internal Dependencies
import authRouter from './routes/auth.route.js';

// App Initialize
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);

// Export
export default app;