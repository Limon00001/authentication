/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import express from 'express';

// Internal Dependencies
import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from '../controllers/auth.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

// Router
const authRouter = express.Router();

// Routes
authRouter.get('/check-auth', verifyToken, checkAuth);
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/verify-email', verifyEmail);
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password/:token', resetPassword);

// Export
export default authRouter;
