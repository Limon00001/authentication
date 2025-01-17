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
