/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import dotenv from 'dotenv';

// Internal Dependencies
import app from "./app.js";
import connectDB from './database/db.js';

// Configuration
dotenv.config();

// Variables
const port = process.env.PORT || 5000;

// Server Start
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    // Database
    await connectDB();
});