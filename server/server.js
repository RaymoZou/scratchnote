require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const router = require('./routes/index');

// mongoDB connection
mongoose.connect(process.env.MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));