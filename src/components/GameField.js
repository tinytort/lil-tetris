import React from 'react';
import { connect } from 'react-redux';

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
                </div>
            </div>
        )
    }
    return null;
};

