import React, { useState, useEffect } from "react";
import Note from "./Note";
import NoteArea from "./NoteArea";
import Toolbar from "./Toolbar";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

function App() {

    const [notes, updateNotes] = useState([])

    useEffect(() => {
        fetchNotes();
    }, [])

    async function fetchNotes() {
        try {
            const response = await axios.get(`/notes`);
            updateNotes(response.data);
        } catch (err) {
            console.log('there was an error fetching the notes');
        }
    }

    async function addNote(note) {
        try {
            await axios.post(`/notes`, note)
            fetchNotes();
        } catch (err) {
            console.log('there was an error adding the note')
        }
    }

    async function deleteNote(id) {
        try {
            await axios.delete(`/notes/${id}`);
            fetchNotes();
        } catch (err) {
            console.log('there was an error deleting the note');
        }
    }

    return <div>
        <Toolbar />
        <NoteArea onAdd={addNote} />
        {notes.map((note) => {
            return <Note
                key={note._id}
                _id={note._id}
                title={note.title}
                content={note.body}
                onDelete={deleteNote}>
            </Note>
        })}
    </div>
}

export default App;