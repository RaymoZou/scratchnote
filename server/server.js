require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const Note = require('./models/Note');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.post('/addNote', async (req, res) => {
    const note = req.body;
    const newNote = new Note(note);
    await newNote.save();
    res.json(newNote);
})

app.get('/getNotes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
})

app.delete('/deleteNote/:id', async (req, res) => {
    const id = req.params.id;
    await Note.deleteOne({_id: id})
    res.send(`note with _id ${id} successfully deleted`);
})

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT))