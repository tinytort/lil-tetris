import React from 'react';
import { connect } from 'react-redux';
import NextBlock from '../containers/NextBlock';
import { changePauseState } from '../actions/action';

let GameInfo = ({ points, clearedLines, nextBlock, isPlaying, isPaused, isGameOver, dispatch }) => {
    if(isPlaying) {
        return(
            <div>
                <button onClick={() => dispatch(changePauseState())}>{ isPaused ? 'UNPAUSE' : 'PAUSE'} </button>
                <div>
                    <h2>Next Shape</h2>
                    <NextBlock />
                </div>
                <div>
                    <h2>Score</h2>
                    <p>{points}</p>
                    <h2>Lines</h2>
                    <p>{clearedLines}</p>
                </div>
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

GameInfo = connect(mapStateToProps)(GameInfo);

export default GameInfo;