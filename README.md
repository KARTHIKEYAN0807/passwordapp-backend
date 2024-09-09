

```markdown
# Password Reset Application

This is a full-stack password reset application built with React for the frontend and Node.js with Express and MongoDB for the backend. The application includes user registration, login, forgot password, and password reset functionalities.

## Features

- User Registration
- User Login with JWT Authentication
- Password Reset Request via Email
- Secure Password Reset with Token Expiration

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, bcryptjs, nodemailer, JWT
- **Hosting**: Netlify (Frontend), Render (Backend)

## Project Structure

```plaintext
password-reset-app/
│
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   └── authController.js     # Authentication and password reset logic
│   ├── models/
│   │   └── User.js               # User model schema
│   ├── routes/
│   │   └── authRoutes.js         # API routes for authentication
│   ├── utils/
│   │   └── sendEmail.js          # Email sending utility
│   ├── .env                      # Backend environment variables
│   └── server.js                 # Express server setup
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/                # React pages (Login, Register, etc.)
│   │   ├── App.js                # Main App component
│   │   └── index.js              # React entry point
│   ├── .env                      # Frontend environment variables
│   └── package.json              # Frontend dependencies
│
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) for the database
- [Git](https://git-scm.com/) for cloning the repository

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/password-reset-app.git
   cd password-reset-app
   ```

2. **Backend Setup**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the backend folder with the following environment variables:

     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     EMAIL_USER=your-email@example.com
     EMAIL_PASS=your-email-password
     CLIENT_URL=https://your-netlify-site.netlify.app
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Frontend Setup**

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the frontend folder with the following environment variable:

     ```env
     REACT_APP_API_URL=https://your-backend-service.onrender.com/api
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```

### Running the Application

- The backend server will run on `http://localhost:5000`.
- The frontend server will run on `http://localhost:5173`.

### Deploying the Application

#### **Frontend (Netlify)**

1. Push your frontend code to a Git repository.
2. Sign in to [Netlify](https://www.netlify.com/) and create a new site by linking your repository.
3. Set the build command to `npm run build` and the publish directory to `build`.
4. Set the environment variable `REACT_APP_API_URL` to your backend URL on Render.

#### **Backend (Render)**

1. Push your backend code to a Git repository.
2. Sign in to [Render](https://render.com/) and create a new Web Service.
3. Set the build command to `npm install` and the start command to `node server.js` or `npm start`.
4. Set the environment variables (`MONGO_URI`, `JWT_SECRET`, `EMAIL_USER`, `EMAIL_PASS`, `CLIENT_URL`) as configured in your local `.env` file.

## Usage

1. **Register** a new user via the registration form.
2. **Login** using your credentials to get a JWT token.
3. Click **Forgot Password** to receive a password reset link via email.
4. **Reset your password** using the link provided in the email.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [your-email@example.com].

---

Enjoy building with the Password Reset Application! If you encounter any issues, feel free to open an issue or submit a pull request.
```

### **Instructions on Where to Update URLs:**

1. Replace `https://your-netlify-site.netlify.app` with your actual Netlify URL.
2. Replace `https://your-backend-service.onrender.com` with your actual Render backend URL.
3. Update environment variables in both frontend and backend `.env` files as per your deployment details.

