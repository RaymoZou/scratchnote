import React from "react";

function Note(props) {

    if (props === undefined) {
        console.log("ruh roh, looks like props is empty");
    }

    function deleteNote() {
        props.onDelete({
            id: props.id
        });
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <i onClick={deleteNote} className="fas fa-trash fa-lg"></i>
        </div>
    )
}

export default Note;