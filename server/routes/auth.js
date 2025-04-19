const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

// Endpoint login/register
router.get('/', (req, res) => {
    res.send('Long live the Auth!');
  });
router.post('/refresh', auth.refreshToken);
router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/me', auth.getMe);
router.post('/logout', auth.logout);

module.exports = router;
