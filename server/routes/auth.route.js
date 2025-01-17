/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import express from "express";

// Internal Dependencies
import { login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";

// Router
const authRouter = express.Router();

// Routes
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/verify-email", verifyEmail);

// Export
export default authRouter;