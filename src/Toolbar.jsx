import React, { useState } from "react";

function Toolbar() {

    const [darkModeOn, setDarkModeOn] = useState(false);

    const darkIcon = <i className="fas fa-lightbulb fa-2x"></i>
    const lightIcon = <i className="far fa-lightbulb fa-2x"></i>

    return <div className="Header">
        {darkModeOn ? darkIcon : lightIcon}
        <h1>ScratchNote</h1>
    </div>
}

export default Toolbar;