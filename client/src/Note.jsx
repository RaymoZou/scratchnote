import React from "react";

function Note(props) {

    if (props === undefined) {
        console.log("ruh roh, looks like props is empty");
    }

    function deleteNote() {
        props.onDelete(props._id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <i onClick={deleteNote} className="fas fa-trash-alt fa-lg trash-button"></i>
        </div>
    )
}

export default Note;