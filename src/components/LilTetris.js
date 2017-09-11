import React from 'react';

import GameField from './GameField.js';
import gameConstants from '../constants/gameConstants';
import MenuContainer from '../containers/MenuContainer';
import CurrentGameInfo from '../containers/CurrentGameInfo';


const { fieldWidth, fieldHeight } = gameConstants;

const LilTetris = () => (
    <div>
        <div id="lilTetrisMenu">
            <MenuContainer />
        </div>
        <div id="lilTetris">
            <GameField width={fieldWidth} height={fieldHeight} />
            <CurrentGameInfo />
        </div>
    </div>
);

export default LilTetris;