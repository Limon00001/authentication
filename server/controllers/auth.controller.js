/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// Registration
const signup = async (req, res) => {
    res.send("Authentication Signup Route");
};

// Login
const login = async (req, res) => {
    res.send("Authentication login Route");
};

// Logout
const logout = async (req, res) => {
    res.send("Authentication logout Route");
};

// Export
export { login, logout, signup };
