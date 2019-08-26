import React from 'react';
import './Char.css';

const Char = props => (
    <img className="charDiv" src={props.name} alt="" onClick={e => props.clickEvent(e.target.src)} />
);

export default Char;