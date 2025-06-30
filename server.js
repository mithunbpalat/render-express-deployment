const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
require('dotenv').config();  

const connectDB = require('./config/db');

// dotenv.config();
connectDB();

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors({
  origin: 'https://erp.zoomlabs.in',
  // origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json())

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/todolist', require('./routes/todolistRoutes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));