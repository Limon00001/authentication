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
