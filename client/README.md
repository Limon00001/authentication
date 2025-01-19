<div align="center">

![Contributor](https://img.shields.io/badge/Contributor-000?style=flat&logo=c&logoColor=whitesmoke) ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![NPM](https://img.shields.io/badge/Npm-CC342D?style=flat&logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/-TailwindCss-38BDF8?style=flat&logo=tailwind-css&logoColor=white) ![Axios](https://img.shields.io/badge/-Axios-000000?style=flat&logo=axios&logoColor=white) ![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=vs-code&logoColor=white) ![Toastify](https://img.shields.io/badge/-Toastify-F05032?style=flat&logo=toastify&logoColor=white)

</div>

<br />
<br />

# Client-Side Documentation

## _`Signup Page`_

#### Overview

The sign-up functionality provides a secure and user-friendly registration process with real-time password strength validation. Built with React and styled using Tailwind CSS, it features animated UI elements and comprehensive password validation.

#### Features

- Real-time password strength meter
- Animated UI components using Framer Motion
- Floating background shapes for visual appeal
- Comprehensive password validation criteria
- Responsive design

#### Password Requirements

The password must meet the following criteria:

- Minimum 6 characters in length
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one number
- Contains at least one special character

### Components Structure

#### SignUpPage

Main registration component that includes:

- Form with input fields for name, email, and password
- Integration with password strength meter
- Animated submit button
- Navigation link to login page

#### PasswordStrengthMeter

Provides visual feedback on password strength including:

- Color-coded strength indicator
- Strength level description
- Real-time criteria validation checklist

#### Input

Reusable input component featuring:

- Icon integration
- Consistent styling
- Focus states
- Error handling

### Technical Requirements

- React 18+
- React Router DOM
- Framer Motion
- React Icons
- Tailwind CSS

### State Management

The sign-up form uses React's useState hook to manage:

- Form input values
- Password strength validation
- Real-time feedback

### Styling

The UI is styled using:

- Tailwind CSS for responsive design
- Custom gradient backgrounds
- Animated transitions
- Blur effects for modern glass-morphism

### Security Considerations

- Password strength is validated in real-time
- Input sanitization is implemented
- Secure password handling

## _`Login Page`_

### Features

- User-friendly login interface
- Animated UI components using Framer Motion
- Floating background shapes for visual appeal
- Responsive design across devices

### Components

#### Login Functionality

##### Features

- Clean and intuitive interface
- Loading state indication
- Password field security
- "Remember me" option
- Forgot password link
- Error handling and feedback

##### Security Features

- Protected routes
- Session management
- Input validation
- Secure password handling

### Component Structure

#### LoginPage

```jsx
// Usage example
<Route path="/login" element={<LoginPage />} />
```

#### Shared Components

- Input: Reusable form input component
- FloatingShape: Animated background elements

### Technical Stack

- React 18+
- React Router DOM for navigation
- Framer Motion for animations
- React Icons
- Tailwind CSS for styling

### State Management

Both login and registration forms utilize React's useState hook for:

- Form input management
- Validation states
- Loading states
- Error handling

### Styling

The authentication UI features:

- Responsive layouts
- Gradient backgrounds
- Animated transitions
- Focus and hover states

## Security Implementation

- Secure form submission
- Protected routes
- Session management

### Usage

To implement the authentication system:

```jsx
import { LoginPage, SignUpPage } from './pages';

// In your router
<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignUpPage />} />
</Routes>;
```

### Error Handling

- Form validation errors
- API response handling
- User feedback mechanisms
- Loading state management

## _`Email Verification Functionality`_

#### Overview

The **Email Verification Page** is part of the user authentication flow, ensuring that a user has access to the email account they provided during registration. This functionality allows users to verify their email address by entering a verification code sent to them. It is designed with a sleek UI, including animated floating shapes and form input fields that provide a clean and user-friendly experience.

#### Features

- **6-digit Input**: Users are prompted to enter a 6-digit verification code.
- **Automatic Focus Handling**: The focus automatically shifts to the next input field when a digit is entered.
- **Auto Submit**: Once all input fields are filled, the form is automatically submitted.
- **Backspace Support**: If the user deletes a digit, the focus shifts back to the previous field.
- **Visual Feedback**: The submit button is disabled until all digits are entered, and it shows a loading state when clicked.

#### Dependencies

- **React Router**: For page routing (`react-router-dom`).
- **Framer Motion**: For smooth animations (`framer-motion`).
- **React State Management**: To track the entered code (`useState` and `useRef`).

### How it Works

The email verification process works as follows:

1. **Initial Setup**:
   The `EmailVerificationPage` component renders a form with six input fields, one for each digit of the 6-digit verification code.
2. **User Input**:
   - The user is expected to input the 6-digit code.
   - Each input field only accepts one character. When a digit is entered, the focus automatically shifts to the next field.
   - If a user pastes the code, the system handles pasting and moves focus accordingly.
   - The user can navigate through the fields using the `Tab` key or by typing into each field.
3. **Auto Submit**:
   - Once all fields are filled (i.e., the 6-digit code is entered), the form is automatically submitted by the `useEffect` hook.
4. **Backspace Handling**:
   - If the user presses `Backspace` on an empty field, the focus shifts back to the previous field.
5. **Button State**:

   - The submit button remains disabled until all input fields have a value.
   - If the user submits the form (either **automatically** or **manually**), a `handleSubmit` function is triggered, and the entered code is submitted.

6. **Backend Integration**:
   - Once submitted, the verification code is typically sent to the backend for validation. If the code is correct, the user is considered verified, and they can proceed further.

### Code Explanation

- **`useState`**: Manages the state of the input fields, storing the 6-digit code as an array of strings.
- **`useRef`**: Stores references to each input field to manage focus and control navigation between fields.
- **`handleChange`**: Updates the state when a digit is entered and manages focus on the next input.
- **`handleKeyDown`**: Handles the backspace functionality to shift focus when a digit is deleted.
- **`handleSubmit`**: Handles form submission when the user submits the code. It currently shows an alert with the entered code.
- **`useEffect`**: Watches the code array and triggers form submission once all fields are filled.

### Visual Elements

- **Floating Shapes**: Animated floating shapes are added to the background for visual appeal.
- **Button State Styling**: The button has hover, focus, and disabled states to provide users with clear interaction cues.
- **Animation**: Framer Motion is used to animate the appearance of the page and elements, creating a smooth and engaging user experience.
