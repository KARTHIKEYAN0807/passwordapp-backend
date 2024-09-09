// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const morgan = require('morgan'); // For request logging
const path = require('path'); // To serve static files if needed

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to the database

const app = express();

// CORS Configuration
const allowedOrigins = [
  'https://passwordapp-frontend.netlify.app', // Main frontend URL
  'https://master--passwordapp-frontend.netlify.app', // Preview or branch deploy URL
  // Add more origins if necessary
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Log requests to the console

// Routes
app.use('/api/auth', authRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Something went wrong' });
});

// Serve static files in production (Optional)
// Uncomment if you have a public folder or need to serve static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'public')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
//   });
// }

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
