import React from "react";
//import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        
        <div className="navbar-header navbar-left text-white">         
          Clicky Game
        </div>
        <div className="navbar-center text-white">
          Click an image to begin!
        </div>
        <div className="nav navbar-nav navbar-right text-white">Score: {props.score} | Top Score: {props.topScore} </div>
      </div>
    </nav>

  );
}

export default Navbar;
