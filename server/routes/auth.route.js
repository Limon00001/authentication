/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import express from "express";

// Internal Dependencies
import { login, logout, signup } from "../controllers/auth.controller.js";

// Router
const authRouter = express.Router();

// Routes
authRouter.get("/signup", signup);
authRouter.get("/login", login);
authRouter.get("/logout", logout);

// Export
export default authRouter;