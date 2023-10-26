require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const Note = require('./models/Note');
const router = require('./routes/index');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.use('/', router);

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));