import React, { useState } from "react";
import Note from "./Note";
import NoteArea from "./NoteArea";

let index = 0;

function App() {

    const [notes, setNotes] = useState([])

    function addNote(note) {
        const { title, body } = note;

        setNotes(prevValue => {
            return [...prevValue, {
                key: index++,
                title: title,
                body: body,
            }]
        })
    }

    return <div>
        <h1 className="header">ScratchNote</h1>
        <NoteArea onAdd={addNote} />
        <Note title="title" content="a sample note" />
        {notes.map((note) => {
            console.log(note.body);
            return <Note title={note.title} content={note.body}></Note>
        })}
    </div>
}

export default App;