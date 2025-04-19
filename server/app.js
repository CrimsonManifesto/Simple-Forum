require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Routes import
const postRouter = require('./routes/posts');
const categoryRouter = require('./routes/categories');
const threadRouter = require('./routes/threads');
const userRouter = require('./routes/users');
const commentRouter = require('./routes/comments');
const notificationRouter = require('./routes/notifications');
const authRoutes = require('./routes/auth');


const app = express();
const cookieParser = require('cookie-parser');

connectDB();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes usage
app.use('/posts', postRouter);
app.use('/threads', threadRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/notifications', notificationRouter);
app.use('/auth', authRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Long live My API!');
});

// Health check route
app.get('/status', (req, res) => {
    res.json({
      status: 'OK',
      uptime: process.uptime(),
      timestamp: new Date(),
    });
  });

// Run server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server live in http://localhost:${PORT}`));
