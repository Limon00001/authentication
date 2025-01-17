/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import bcrypt from "bcryptjs";

// Internal Dependencies
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import generateVerificationToken from '../utils/generateVerificationCode.js';

// Registration
const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                error: {
                    success: false,
                    message: "All fields are required"
                }
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        // If user already exists
        if (existingUser) {
            return res.status(400).json({
                error: {
                    success: false,
                    message: "User already exists"
                }
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

        // Generate a verification code
        const verificationToken = generateVerificationToken(6);

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000     // 24 hours
        });

        // Save the user
        await user.save();

        // Token and cookie 
        generateTokenAndSetCookie(user._id, res);

        // Remove password
        user.password = undefined;
        
        // Response
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });

    } catch (error) {
        return res.status(400).json({
            error: {
                success: false,
                message: error.message
            }
        });
    }
};

// Export
export { signup };
