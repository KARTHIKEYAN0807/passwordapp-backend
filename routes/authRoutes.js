const express = require('express');
const router = express.Router();
const { forgotPassword, resetPassword, registerUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
