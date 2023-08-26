require('dotenv').config();
const express = require('express');
const app = express()
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT))