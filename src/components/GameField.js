import React from 'react';
import { connect } from 'react-redux';
import { Stage } from './Stage';
import Banner from './Banner';
import CurrentBlock from '../containers/CurrentBlock';
import ActiveBlocks from '../containers/ActiveBlocks';
import gameConstants from '../constants/gameConstants.js';


const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
    if (isPlaying) {
        return (
            <div>
                <Stage width={fieldWidth} height={fieldHeight}>
                    <CurrentBlock />
                    <ActiveBlocks />
                </Stage>
                {isPaused ? <Banner label="PAUSED" /> : null}
                {isGameOver ? <Banner label="GAME OVER" /> : null}
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

