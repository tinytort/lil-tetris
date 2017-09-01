import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import CurrentBlock from '../containers/CurrentBlock';
import ActiveBlock from '../containers/ActiveBlock';
import gameConstants from '../constants/gameConstants.js';


const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
    if (isPlaying) {
        return (
            <div>
                <div width={ fieldWidth } height={ fieldHeight }>
                    <div>
                        <CurrentBlock />
                        <ActiveBlocks />
                    </div>
                    { isPaused ? <Banner label="PAUSED" /> : null }
                </div>
                { isGameOver ? <Banner label="GAME OVER" /> : null }
            </div>
        );
    }
    return null;
};

const mapStateToProps = ({ gameStatus }) => ({
    isPlaying: gameStatus !== 'IDLE', 
    isPaused: gameStatus === 'PAUSED',
    isGameOver: gameStatus === 'GAME_OVER'
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;

