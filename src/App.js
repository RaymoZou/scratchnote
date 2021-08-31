import React, { useState } from "react";
import Note from "./Note";
import NoteArea from "./NoteArea";

let index = 0;

function App() {

    const [notes, updateNotes] = useState([])

    function addNote(note) {
        const { title, body } = note;

        updateNotes(prevValue => {
            return [...prevValue, {
                id: index,
                key: index,
                title: title,
                body: body
            }]
        })

        index++;
    }

    function deleteNote(note) {
        updateNotes(notes.filter(n => {
            return (n.id !== note.id);
        }));
    }

    return <div>
        <h1 className="header">ScratchNote</h1>
        <NoteArea onAdd={addNote} />
        {/* <Note title="This is a Sample Note" content="Click on the trash icon to delete me!" /> */}
        {notes.map((note) => {
            return <Note id={note.key} key={note.key} title={note.title} content={note.body} onDelete={deleteNote}></Note>
        })}
    </div>
}

export default App;