/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/18/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { RiLoader4Fill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

// Internal Dependencies
import Input from '../componenets/Input';
import PasswordStrengthMeter from '../componenets/PasswordStrengthMeter';
import { useAuthStore } from '../store/authStore';

const SignUpPage = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  // Input Handle
  const handleChange = (e) => {
    let { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(input.email, input.password, input.name);
      navigate('/email-verify');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={FiUser}
            placeholder={'Full name'}
            type={'text'}
            name={'name'}
            value={input.name}
            onChange={handleChange}
          />
          <Input
            icon={FiUser}
            placeholder={'Email Address'}
            type={'email'}
            name={'email'}
            value={input.email}
            onChange={handleChange}
          />
          <Input
            icon={FiUser}
            placeholder={'Password'}
            type={'password'}
            name={'password'}
            value={input.password}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <PasswordStrengthMeter password={input.password} />

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <RiLoader4Fill className="animate-spin mx-auto" />
            ) : (
              'Sign Up'
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{' '}
          <Link to={'/login'} className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

// Export
export default SignUpPage;
