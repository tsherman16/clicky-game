import React from "react";
import "./style.css";

function Cards(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="img-container">
                    <button class="shadow-lg p-3 mb-5 bg-white" onClick={() => props.handleCardCount(props.id)}>
                        <img alt="Cardinal Player" src={props.image} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cards;