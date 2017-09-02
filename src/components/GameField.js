import React from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import Banner from './Banner';
import CurrentBlock from '../containers/CurrentBlock';
import ActiveBlocks from '../containers/ActiveBlocks';
import gameConstants from '../constants/gameConstants.js';


const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
    if (isPlaying) {
        return (
            <div>
                <Stage width={ fieldWidth } height={ fieldHeight }>
                    <Layer>
                        <CurrentBlock />
                        <ActiveBlocks />
                    </Layer>
                    { isPaused ? <Banner label="PAUSED" /> : null }
                </Stage>
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

