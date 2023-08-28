import React, { useState, useEffect } from "react";
import Note from "./Note";
import NoteArea from "./NoteArea";
import Toolbar from "./Toolbar";
import Axios from "axios";

function App() {

    const [notes, updateNotes] = useState([])

    useEffect(() => {
        // TODO: refactor with async/await
        Axios.get("http://localhost:3001/getNotes").then((res) => {
            updateNotes(res.data);
        });
    }, [])

    function addNote(note) {
        const { title, body } = note;
        Axios.post("http://localhost:3001/addNote", note);
        updateNotes([...notes, { title, body }])
    }

    function deleteNote(id) {
        Axios.delete(`http://localhost:3001/deleteNote/${id}`);
        // TODO: front-end rerendering after delete
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