import React from "react";
import css from "./styles.css";

const styles = {
    scorebar: {
        minHeight: "160px",
        backgroundImage: "url(./assets/rag.png)",
        color: "rgba(255,255,255,0.7",
        textAlign: "center"
    },
    h1: {
        margin: "0",
        paddingTop: "40px",
        textAlign: "center",
        fontSize: "3rem",
        fontFamily: "Merienda"
    },
    barText: {
        paddingTop: "45px",
        textAlign: "center",
        color: "rgba(255,255,255,0.5)",
        fontSize: "1.3rem",
        fontFamily: "Merienda"
    }
};

function ScoreBar(props) {
    return (
    <header style={styles.scorebar}>
        <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet"></link>
    <div className="row" >
        <div className="col-lg-3"></div>
        <div className="col-lg-4">
        <h1 style={styles.h1}>Warcraft Clicky</h1>
        <p className={props.messageColor}>{props.messageText}</p>
        </div>
        <div className="col-lg-2">
        <div style={styles.barText}>Current Score: {props.score} <br />Top Score: {props.topScore}</div>
        </div>
        <div className="col-lg-3"></div>
    </div>
    </header>
    );
}

export default ScoreBar;
