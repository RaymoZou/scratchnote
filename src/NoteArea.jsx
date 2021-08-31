import React, { useState } from "react";

function NoteArea(props) {

    const [textInput, setTextInput] = useState({
        title: "",
        body: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setTextInput(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    // will only save note if both the title and body are not empty strings
    function saveNote() {
        if (textInput.title !== "" && textInput.body !== "") {
            props.onAdd(textInput);
        setTextInput(() => {
            return {
                title: "",
                body: ""
            }
        })
        }
    }

    return (
        <div>
            <div className="NoteArea">
                <input
                    autoComplete="off"
                    onChange={handleChange}
                    name="title" type="text"
                    placeholder="title"
                    value={textInput.title}>
                </input>
                <input
                    value={textInput.body}
                    autoComplete="off"
                    onChange={handleChange}
                    name="body" type="text"
                    placeholder="type your note here..."></input>
                <button onClick={saveNote}>Add note</button>
            </div>
        </div>
    )
}

export default NoteArea;