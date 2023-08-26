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

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            saveNote();
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
                    value={textInput.title}
                    onKeyPress={handleKeyPress}
                >
                </input>
                <input
                    value={textInput.body}
                    autoComplete="off"
                    onChange={handleChange}
                    name="body" type="text"
                    placeholder="type your note here..."
                    onKeyPress={handleKeyPress}
                >
                </input>
                <i onClick={saveNote} className="fas fa-plus fa-2x submit-button"></i>
            </div>
        </div>
    )
}

export default NoteArea;