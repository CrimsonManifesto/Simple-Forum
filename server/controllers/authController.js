const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adjust path as needed
const bcrypt = require('bcrypt');
const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'Strict',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 24 * 60 * 60 * 1000
};
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_EXPIRES_IN = '1d';

exports.refreshToken = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const newToken = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    res.cookie('token', newToken, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: true, // set to false for localhost over HTTP
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({ message: 'Token refreshed' });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const createToken = (userId) => jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });


// REGISTER
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  const exists = await User.findOne({ $or: [{ email }, { username }] });
  if (exists) return res.status(409).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });

  const token = createToken(user._id);
  res.cookie('token', token, COOKIE_OPTIONS);
  res.status(201).json({ message: 'User registered', user: formatUser(user) });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = createToken(user._id);
  res.cookie('token', token, COOKIE_OPTIONS);
  res.json({ message: 'Logged in', user: formatUser(user) });
};

// /auth/me
exports.getMe = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// LOGOUT
exports.logout = (req, res) => {
  res.clearCookie('token', COOKIE_OPTIONS);
  res.json({ message: 'Logged out' });
};

// Helper
function formatUser(user) {
  const { _id, username, email, avatar, role, status } = user;
  return { id: _id, username, email, avatar, role, status };
}
