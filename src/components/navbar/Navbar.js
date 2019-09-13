import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <button type="button" className="btn btn-outline-white active" onClick={() => props.resetState()}><h2>Clicky Game</h2></button>
            </li>
            <li className="nav-item non-image">
                <h2>Click an image to begin!</h2>
            </li>
            <li className="nav-item non-image">
                <h2>Score: {props.score} | High Score: {props.highScore}</h2>
            </li>
        </ul>
    )
}

export default Navbar;