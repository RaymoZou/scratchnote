const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;