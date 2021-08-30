import React from "react";

function Note(props) {

    if (props === undefined) {
        console.log("ruh roh, looks like props is empty");
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            {props.content}
        </div>
    )
}

export default Note;