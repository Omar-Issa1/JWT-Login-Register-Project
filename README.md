# JWT Login & Register Project

A simple and secure authentication system built with **Node.js**, **Express**, and **MongoDB**, featuring **JWT (JSON Web Token)** authentication.  
This project demonstrates how to register and log in users securely, store passwords using **bcrypt**, and protect routes with **middleware** authentication.

🔗 **Live Demo:** [JWT Login & Register App](https://jwt-login-register-app.vercel.app)

---

## Features

- User **registration** with validation.
- Secure **login** using JWT tokens.
- **Password hashing** using bcrypt before saving to database.
- **Error handling** for invalid inputs and duplicate users.
- Protected **dashboard route** accessible only with a valid token.
- Deployed on **Vercel**.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (jsonwebtoken), bcryptjs
- **Environment Management:** dotenv
- **Deployment:** Vercel

---

## Project Structure

```
JWT-Login-Register-Project/
├── controllers/
│   └── main.js
├── db/
│   └── connect.js
├── errors/
│   ├── bad-request.js
│   ├── custom-error.js
│   ├── unauthenticated.js
│   └── not-found.js
├── middleware/
│   ├── auth.js
│   ├── error-handler.js
│   └── not-found.js
├── models/
│   └── user.js
├── public/
│   ├── index.html
│   ├── register.html
│   ├── styles.css
│   └── browser-app.js
├── routes/
│   └── main.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Omar-Issa1/JWT-Login-Register-Project.git
cd JWT-Login-Register-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

### 4. Run the App

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint            | Description            | Auth Required |
| -----: | ------------------- | ---------------------- | ------------- |
|   POST | `/api/v1/register`  | Register new user      | No            |
|   POST | `/api/v1/login`     | Login existing user    | No            |
|    GET | `/api/v1/dashboard` | Access protected route | Yes           |

---

## Authentication Flow

1. User registers with **username** and **password**.
2. Password is hashed and stored in MongoDB.
3. On login, a **JWT token** is generated and returned.
4. The token must be sent in the `Authorization` header for protected routes.

---

## Deployment

This project is deployed on **Vercel**.  
You can access the live version here:  
=> [https://jwt-login-register-app.vercel.app](https://jwt-login-register-app.vercel.app)

---

## 👤 Author

**Omar Issa**

- 💻 [GitHub](https://github.com/Omar-Issa1)
- 🌐 [Live App](https://jwt-login-register-app.vercel.app)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and modify it.
