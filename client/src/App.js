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
            const response = await Axios.get("http://localhost:3001/getNotes")
            updateNotes(response.data);
            console.log('updated n0tes');
        } catch (err) {
            console.log('there was an error fetching the notes');
        }
    }

    async function addNote(note) {
        try {
            await Axios.post("http://localhost:3001/addNote", note)
            fetchNotes();
        } catch (err) {
            console.log('there was an error adding the note')
        }
    }

    async function deleteNote(id) {
        try {
            await Axios.delete(`http://localhost:3001/deleteNote/${id}`);
            fetchNotes();
        } catch (err) {
            console.log('there was an error deleting the note');
        }
    }

    return <div>
        <Toolbar />
        <NoteArea onAdd={addNote} />
        {/* <Note title="This is a Sample Note" content="Click on the trash icon to delete me!" /> */}
        {notes.map((note) => {
            return <Note key={note._id} _id={note._id} title={note.title} content={note.body} onDelete={deleteNote}></Note>
        })}
    </div>
}

export default App;