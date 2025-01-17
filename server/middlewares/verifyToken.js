/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import jwt from 'jsonwebtoken';

// Verify Token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  try {
    // If token is not found
    if (!token) {
      return res.status(401).json({
        error: {
          success: false,
          message: 'Unauthorized',
        },
      });
    }

    // If token is found
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If token is not valid
    if (!decoded) {
      return res.status(401).json({
        error: {
          success: false,
          message: 'Unauthorized',
        },
      });
    }

    // If token is valid
    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      error: {
        success: false,
        message: 'Server Error',
      },
    });
  }
};

// Export
export default verifyToken;
