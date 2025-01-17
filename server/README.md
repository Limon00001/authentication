<div align="center">

![Contributor](https://img.shields.io/badge/Contributor-000?style=flat&logo=c&logoColor=whitesmoke) ![Node JS](https://img.shields.io/badge/Node-339933?style=flat&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![NPM](https://img.shields.io/badge/Npm-CC342D?style=flat&logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white) ![MongoDB](https://img.shields.io/badge/-MongoDB-4DB33D?style=flat&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white) ![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white)

</div>

<br />
<br />

# Authentication API Documentation

## Signup Endpoint

### POST `/api/auth/signup`

Create a new user account.

#### Request Body
```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

#### Required Fields
- `name`: User's full name
- `email`: Valid email address
- `password`: User's password

#### Response

##### Success (201 Created)
```json
{
    "success": true,
    "message": "User created successfully",
    "user": {
        "_id": "string",
        "name": "string",
        "email": "string",
        "isVerified": false,
        "lastLogin": "datetime",
        "createdAt": "datetime",
        "updatedAt": "datetime"
    }
}
```

##### Error Cases

###### Missing Fields (400 Bad Request)
```json
{
    "error": {
        "success": false,
        "message": "All fields are required"
    }
}
```

###### User Already Exists (400 Bad Request)
```json
{
    "error": {
        "success": false,
        "message": "User already exists"
    }
}
```

#### Notes
- Password is automatically hashed before storage
- A verification token is generated and stored
- JWT token is set in HTTP-only cookie
- Verification token expires after 24 hours

## Email Verification Endpoint

### POST `/api/auth/verify-email`

Verify a user's email address using the verification code sent during registration.

#### Request Body
```json
{
    "code": "123456"    // Example of 6-digit verification code
}
```

#### Required Fields
- `code`: 6-digit verification code sent to user's email during registration

#### Response

##### Success (200 OK)
```json
{
    "success": true,
    "message": "Email verified successfully",
    "user": {
        "_id": "string",
        "name": "string",
        "email": "string",
        "isVerified": true,
        "lastLogin": "datetime",
        "createdAt": "datetime",
        "updatedAt": "datetime"
    }
}
```

##### Error Cases

###### Invalid Verification Code (400 Bad Request)
```json
{
    "error": {
        "success": false,
        "message": "Invalid verification code"
    }
}
```

###### Server Error (400 Bad Request)
```json
{
    "error": {
        "success": false,
        "message": "Error message details"
    }
}
```

#### Verification Process
1. User receives 6-digit code via email after registration
2. Code must be submitted within 24 hours of registration
3. Upon successful verification:
   - User's email status is updated to verified
   - Verification token is removed from user's record
   - Welcome email is sent to the user
   - User profile is returned in response

#### Security Notes
- Verification code expires after 24 hours
- Code is single-use only
- Invalid attempts are logged
- Welcome email confirms successful verification

## Login and Logout Endpoints

### Login `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a token in an HTTP-only cookie
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Logged in successfully",
      "user": {
        "_id": "user_id",
        "name": "User Name",
        "email": "user@example.com",
        "lastLogin": "2024-01-17T12:00:00.000Z"
      }
    }
    ```
- **Error Response**:
  - **Code**: 400
  - **Content**:
    ```json
    {
      "error": {
        "success": false,
        "message": "All fields are required"
      }
    }
    ```

### Logout `/api/auth/logout`
- **Method**: `POST`
- **Description**: Logs out the user by clearing the authentication cookie
- **Request Body**: None required
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Logged out successfully"
    }
    ```

## Password Reset Endpoints

### Forgot Password `/api/auth/forgot-password`
- **Method**: `POST`
- **Description**: Initiates password reset by sending a reset link to user's email
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Password reset email sent successfully"
    }
    ```
- **Error Responses**:
  - **Code**: 400
  - **Missing Email**:
    ```json
    {
      "error": {
        "success": false,
        "message": "Email is required"
      }
    }
    ```
  - **User Not Found**:
    ```json
    {
      "error": {
        "success": false,
        "message": "User does not exist"
      }
    }
    ```

### Reset Password `/api/auth/reset-password/:token`
- **Method**: `POST`
- **Description**: Resets user's password using the token received via email
- **URL Parameters**:
  - `token`: Reset token received in email
- **Request Body**:
  ```json
  {
    "password": "newPassword123"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Password reset successfully"
    }
    ```
- **Error Responses**:
  - **Code**: 400
  - **Invalid Token**:
    ```json
    {
      "error": {
        "success": false,
        "message": "Invalid or expired link"
      }
    }
    ```
  - **Missing Password**:
    ```json
    {
      "error": {
        "success": false,
        "message": "Password is required"
      }
    }
    ```

#### Notes
- Reset token expires after 1 hour
- A confirmation email is sent after successful password reset
- Previous tokens are invalidated after password reset
- Reset link is single-use only