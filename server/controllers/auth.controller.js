/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import bcrypt from "bcryptjs";

// Internal Dependencies
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";
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

        // Send verification email
        await sendVerificationEmail(email, verificationToken);

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

// Email Verification
const verifyEmail = async (req, res) => {
    const { code } = req.body;

    try {
        const user = await User.findOne({ 
            verificationToken: code, 
            verificationTokenExpiresAt: { $gt: Date.now() } 
        });

        // If user is not found
        if (!user) {
            return res.status(400).json({
                error: {
                    success: false,
                    message: "Invalid verification code"
                }
            });
        }

        // Update user information
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        // Save the user
        await user.save();

        // Send welcome email
        await sendWelcomeEmail(user.email, user.name);

        // Remove password
        user.password = undefined;
        
        // Response
        return res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user
        });
    } catch (error) {
        // Response error
        return res.status(400).json({
            error: {
                success: false,
                message: error.message
            }
        });
    }
};

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validation
        if (!email || !password) {
            return res.status(400).json({
                error: {
                    success: false,
                    message: "All fields are required"
                }
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });

        // If user does not exist
        if (!user) {
            return res.status(400).json({
                error: {
                    success: false, 
                    message: "User does not exist"
                }
            });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        // If password is incorrect
        if (!isPasswordCorrect) {
            return res.status(400).json({
                error: {
                    success: false,
                    message: "Incorrect password"
                }
            });
        }

        // Token and cookie
        generateTokenAndSetCookie(user._id, res);

        // Update last login
        user.lastLogin = Date.now();

        // Save the user 
        await user.save();

        // Remove password
        user.password = undefined;

        // Response
        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user
        });
    } catch (error) {
        // Response error
        return res.status(400).json({
            error: {
                success: false,
                message: error.message
            }
        })
    }
};

// Logout
const logout = async (req, res) => {
    // Clear cookie
    res.clearCookie('token');

    // Response
    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};

// Export
export { login, logout, signup, verifyEmail };

