const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const postRoutes = require('./routes/post');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use("/api/v1/posts", postRoutes);

module.exports = app
