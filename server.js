const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

//connect db
connectDB();

//router files
const bootcamp = require('./routes/bootcamps');

const app = express();

//body parser
app.use(express.json());

//Mount routers
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
