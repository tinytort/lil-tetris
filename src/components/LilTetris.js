import React from 'react';

import GameField from './GameField.js';
import gameConstants from '../constants/gameConstants';

const { fieldWidth, fieldHeight } = gameConstants;

const LilTetris = () => (
    <div>
        <GameField width={fieldWidth} height={fieldHeight} />
    </div>
);

export default LilTetris;