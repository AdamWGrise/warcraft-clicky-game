import React from 'react';
// import css
import Char from './Char';
import "./Char.css"

const GameField = props => (
    <div className={props.shake ? 'container d-flex flex-wrap justify-content-center shake' : 'container d-flex flex-wrap justify-content-center'}>
        {props.chars.map((a, i) => <Char name={a} key={i} clickEvent={props.clickEvent} />)}
    </div>
);

export default GameField;