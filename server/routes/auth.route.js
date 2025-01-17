/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import express from "express";

// Internal Dependencies
import { signup } from "../controllers/auth.controller.js";

// Router
const authRouter = express.Router();

// Routes
authRouter.post("/signup", signup);

// Export
export default authRouter;