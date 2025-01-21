/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/21/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import axios from 'axios';
import { create } from 'zustand';

// Cookies
axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${import.meta.env.BACKEND_URL}/api/auth/signup`, {
        email,
        password,
        name,
      });
    } catch (error) {
      set({
        error: error.response.data.message || 'Error signing up',
        isLoading: false,
      });
      throw error;
    }
  },
}));

// Export
export { useAuthStore };
