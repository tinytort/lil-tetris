import React from 'react';
import { connect } from 'react-redux';
import { Stage } from './Stage';
import NextBlock from '../containers/NextBlock';
import { changePauseState } from '../actions/action';
import { postScore } from '../auth/actions';

let GameInfo = ({ points, clearedLines, nextBlock, isPlaying, isPaused, isGameOver, dispatch }) => {
    if(isPlaying) {
        return(
            <div id="gameInfo">
                {!isGameOver && <button onClick={() => dispatch(changePauseState())}>{ isPaused ? 'UNPAUSE' : 'PAUSE'} </button>}
                
                <div>
                    <h2>Next Shape</h2>
                    <div id="nextShape">
                        <Stage width={120} height={100}>
                            <NextBlock />
                        </Stage>
                    </div>
                </div>
                <div>
                    <h2>Score</h2>
                    <p>{points}</p>
                    <h2>Lines</h2>
                    <p>{clearedLines}</p>
                    {isGameOver ? dispatch(postScore(points)) : null}
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