import React, { useState, useEffect } from "react";
import Note from "./Note";
import NoteArea from "./NoteArea";
import Toolbar from "./Toolbar";
import Axios from "axios";

function App() {

    const [notes, updateNotes] = useState([])

    useEffect(() => {
        fetchNotes();
    }, [])

    async function fetchNotes() {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/getNotes`);
            updateNotes(response.data);
        } catch (err) {
            console.log('there was an error fetching the notes');
        }
    }

    async function addNote(note) {
        try {
            await Axios.post(`${process.env.REACT_APP_SERVER_URL}/addNote`, note)
            fetchNotes();
        } catch (err) {
            console.log('there was an error adding the note')
        }
    }

    async function deleteNote(id) {
        try {
            await Axios.delete(`${process.env.REACT_APP_SERVER_URL}/deleteNote/${id}`);
            fetchNotes();
        } catch (err) {
            console.log('there was an error deleting the note');
        }
    }

    return <div>
        <Toolbar />
        <NoteArea onAdd={addNote} />
        {notes.map((note) => {
            return <Note key={note._id} _id={note._id} title={note.title} content={note.body} onDelete={deleteNote}></Note>
        })}
    </div>
}

export default App;