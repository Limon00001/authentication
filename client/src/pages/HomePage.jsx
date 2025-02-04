/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/24/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import { motion } from 'framer-motion';

// Internal Dependencies
import { useAuthStore } from '../store/authStore';
import { formatDate } from '../utils/date';

const HomePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <motion.div className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl border border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
        Dashboard
      </h2>
      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-300">Name: {user.name}</p>
          <p className="text-gray-300">Email: {user.email}</p>
        </motion.div>
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Account Activity
          </h3>
          <p className="text-gray-300">
            <span className="font-bold">Joined: </span>
            {new Date(user.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Last Login: </span>
            {user.lastLogin
              ? formatDate(user.lastLogin)
              : 'You just signed up!'}
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="w-full py-3 px-4 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Export
export default HomePage;
