import React from 'react';
import { startGame } from '../actions/action';
import { connect } from 'react-redux';

let Banner = ({ label, dispatch }) => {
    return (
        <div>
            <h1>{label}</h1>
            { label === 'GAME OVER' ? 
                <button onClick={()=>dispatch(startGame())}>New Game </button> : null}
        </div>
    );
};

Banner = connect()(Banner);
export default Banner;