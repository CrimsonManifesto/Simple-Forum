const express = require('express');
const { loginOrRegister } = require('../controllers/authController');
const router = express.Router();

// Endpoint login/register
router.post('/login', loginOrRegister);

module.exports = router;
