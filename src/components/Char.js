import React from 'react';

const style = {
    charDiv: {
        border: "4px black solid",
        boxShadow: "0px 0px 7px #fff",
        margin: "10px",
        width: "11%",
        cursor: "pointer",
        overflow: "hidden"
    }
};

const Char = props => (
    <img style={style.charDiv} src={props.name} alt="" onClick={e => props.clickEvent(e.target.src)} />
);

export default Char;