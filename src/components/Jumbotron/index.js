import React from "react";
//import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
    return (

        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Clicky Game!</h1>
            <hr className="my-4" />
                <h2 className="lead">
                    Click on an image to earn points, but don't click on any more than once!
                </h2>
        </div>

    );
}

export default Jumbotron;
