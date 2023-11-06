require('dotenv').config();
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// ADD note
router.post('/notes', async (req, res) => {
    try {
        const { title, body } = req.body;
        // TODO add error handling if title OR body not defined
        const newNote = new Note({ title, body });
        await newNote.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});

// GET all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.sendStatus(500);
    }
});

// DELETE note with id
router.delete('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = router;

