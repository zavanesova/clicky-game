import React from "react";
import "./style.css";

function Score(props) {
    return(
        <div className="header" id="myHeader">
            <h1 className="name">Clicky Game</h1>
            <h1 className="scores">Score: {props.score} Top Score: {props.topScore}</h1>
        </div>
    )
}


export default Score;