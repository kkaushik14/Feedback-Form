const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const feedbackRouter = require('./routes/feedback');
const authRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');
const connectDB = require('./lib/db');
dotenv.config();

const app = express();
// const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/api/feedback', feedbackRouter);
app.use('/api/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});