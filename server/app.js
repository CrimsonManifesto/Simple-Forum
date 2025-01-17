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


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes usage
app.use('/posts', postRouter);
app.use('/threads', threadRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/notifications', notificationRouter);

// Default Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Run server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server live in http://localhost:${PORT}`));
