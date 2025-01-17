/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import jwt from 'jsonwebtoken';

// Generate token and set cookie
const generateTokenAndSetCookie = (userId, res) => {
    // Generate token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Check if token is generated
    if (!token) {
        return res.status(500).json({
            error: {
                success: false,
                message: "Something went wrong"
            }
        });
    }

    // Set cookie
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000     // 7 days
    });

    return token;
};

// Export
export default generateTokenAndSetCookie;