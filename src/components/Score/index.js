import React from "react";
import "./style.css";

function Score(props) {
    return(
        <div>
            <h1>Clicky Game</h1>
            <h1>Score: {props.score} Top Score: {props.topScore}</h1>
        </div>
    )
}

export default Score;