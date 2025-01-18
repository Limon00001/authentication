/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/18/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const PasswordCriteria = ({ password }) => {
  // Defines a list of criteria to check if a password meets certain requirements
  const criteria = [
    { id: 1, label: 'At least 6 characters', met: password.length >= 6 },
    { id: 2, label: 'Contains uppercase letters', met: /[A-Z]/.test(password) },
    { id: 3, label: 'Contains lowercase letters', met: /[a-z]/.test(password) },
    { id: 4, label: 'Contains a number', met: /\d/.test(password) },
    {
      id: 5,
      label: 'Contains special character',
      met: /[^A-Za-z0-9)]/.test(password),
    },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((criteria) => (
        <div key={criteria.id} className="flex items-center text-xs">
          {criteria.met ? (
            <IoMdCheckmark className="size-4 text-green-500 mr-2" />
          ) : (
            <RxCross2 className="size-4 text-gray-400 mr-2" />
          )}
          <span className={criteria.met ? 'text-green-500' : 'text-gray-400'}>
            {criteria.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  // Checks the strength of a password based on four conditions and returns a score (strength) from 0 to 4
  const getStrength = (pass) => {
    let strength = 0;

    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  // Calculates the password strength using the getStrength function and assigns a color to it based on the strength score
  const getColor = (strength) => {
    if (strength === 0) return 'bg-red-500';
    if (strength === 1) return 'bg-red-400';
    if (strength === 2) return 'bg-yellow-500';
    if (strength === 3) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  // A descriptive label for the password strength based on its score
  const getStrengthText = (strength) => {
    if (strength === 0) return 'very weak';
    if (strength === 1) return 'weak';
    if (strength === 2) return 'fair';
    if (strength === 3) return 'good';
    return 'strong';
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password Strength</span>
        <span className="text-xs text-gray-400">
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-1">
        {/* It generates an array of four items using [...Array(4)] and maps over it to create four div elements. Each div represents one level of password strength */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < strength ? getColor(strength) : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

// Export
export default PasswordStrengthMeter;
