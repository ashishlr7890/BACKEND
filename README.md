# BACKEND
# Backend API (Node.js + Express + MongoDB)

A RESTful backend for user authentication featuring **signup**, **signin**, **update**, and **delete** operations, secured by JWT.

---

##  Features

- **User Registration (`/signup`)**
- **User Login (`/signin`)** returning JWT token
- **Protected Update (`/update`)** and **Delete (`/delete`)**
- Uses **bcryptjs** for password hashing
- Uses **jsonwebtoken** for authentication
- Database powered by **MongoDB** via **Mongoose**
- Testable using **Vitest** + **Supertest**

---

##  Project Structure

backend/
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ └── authcontroller.js # Logic for signup, signin, update, delete
├── middleware/
│ └── authMiddleware.js # JWT authentication middleware (protect)
├── model/
│ └── usermodel.js # Mongoose schema for User
├── routes/
│ └── authroutes.js # Express routes for authentication
├── server.js # Entry point to start express server
├── .env # Environment variables (not committed)
├── .gitignore # Git ignore configuration
├── package.json # Dependencies and npm scripts
├── README.md # This file
└── tests/
└── auth.test.js # Vitest test suite for all endpoints

---

##  Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ashishlr7890/BACKEND.git
   cd BACKEND
Install dependencies
npm install
Configure environment variables
Create a .env at the root:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
Running the App
npm start
or
node server.js
Listens on port 8000 by default.
API Endpoints
Method	Route	Description	Auth Required
POST	/api/v1/signup	Register new user	No
POST	/api/v1/signin	Login and get JWT	No
PUT	/api/v1/update	Update user's name	Yes (JWT)
DELETE	/api/v1/delete	Delete user account	Yes (JWT)
Testing (Vitest + Supertest)
Setup:
npm install --save-dev vitest supertest
Run tests:
npm test
Your auth.test.js file should test:
Successful user signup
Successful login and JWT issuance
Protected update (with JWT)
Protected delete (with JWT)
