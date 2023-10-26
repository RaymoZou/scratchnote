require('dotenv').config();
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.post('/addNote', async (req, res) => {
    const note = req.body;
    const newNote = new Note(note);
    await newNote.save();
    res.json(newNote);
});

router.get('/getNotes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

router.delete('/deleteNote/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });
        res.send(`note with id ${id} successfully deleted`); // added this line
    } catch (err) {
        console.log('there was an error deleting the post');
    }
});

module.exports = router;

