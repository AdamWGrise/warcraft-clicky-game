import React from 'react';
import Char from './Char';

const style = {
    field: {
        backgroundImage: "url(./assets/bg.png)",
    }
}

const GameField = props => (
    <div style={style.field}>
        <div className="container">
            <div className={props.shake ? 'container d-flex flex-wrap justify-content-center shake' : 'container d-flex flex-wrap justify-content-center'}>
            {props.chars.map((a, i) => <Char name={a} key={i} clickEvent={props.clickEvent} />)}
            </div>
        </div>
    </div>

);

export default GameField;