const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const morgan = require('morgan'); // For request logging
const path = require('path'); // To serve static files if needed

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://password-reset-frontend-client.netlify.app/', // Ensure this matches the frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(morgan('dev')); // Log requests to the console

// Routes
app.use('/api/auth', authRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Serve static files if in production (Optional)
// app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
