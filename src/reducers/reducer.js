import { combineReducers } from 'redux';
import { getNewClearedGrid } from '../lib/lib';
import gameConstants from '../constants/gameConstants';
import * as actions from '../actions/action';

const { initialGrid, blocks, blockUnit } = gameConstants;

function gameStatus(state = 'IDLE', action) {
    switch (action.type) {
        case actions.START_GAME:
        case actions.UNPAUSE_GAME:
            return 'PLAYING';
        case actions.PAUSE_GAME:
            return 'PAUSED';
        case actions.GAME_OVER:
            return 'GAME_OVER';
        default:
            return state;
    }
}

function activeBlocks(state = initialGrid, action) {
    switch (action.type) {
        case actions.ADD_BLOCK:
            return getNewClearedGrid(state, action.currentBlock, action.color);
        case actions.START_GAME:
            return initialGrid;
        default:
            return state;
    }
}

function nextBlock(state = {}, action) {
    switch (action.type) {
        case actions.START_GAME:
        case actions.ADD_BLOCK:
            return {
                shape: blocks[action.nextRandomShape].shape,
                name: action.nextRandomShape,
                color: blocks[action.nextRandomShape].color,
                offsetX: 10,
                offsetY: blockUnit
            };
        default: 
            return state;
    }
}

function currentBlock(state = {}, action) {
    switch (action.type) {
        case actions.START_GAME:
            return {
                shape: blocks[action.currentRandomShape].shape,
                name: action.currentRandomShape,
                color: blocks[action.currentRandomShape].color,
                offsetX: blockUnit * 3,
                offsetY: 0
            };
        case actions.ADD_BLOCK:
            return Object.assign({}, action.nextBlock, { offsetX: blockUnit * 3, offsetY: 0 });
        case actions.MOVE_RIGHT:
            return Object.assign({}, state, {offsetX: state.offsetX + blockUnit});
        case actions.MOVE_LEFT:
            return Object.assign({}, state, {offsetX: state.offsetX - blockUnit});
        case actions.MOVE_DOWN:
            return Object.assign({}, state, {offsetY: state.offsetY + blockUnit});
        case actions.ROTATE_BLOCK:
            return Object.assign({}, state, { shape: action.rotatedBlock });
        default:
            return state;
    }
}

function gameScore(state = {}, action) {
    switch(action.type) {
        case actions.START_GAME:
            return {
                points: 0,
                clearedLines: 0
            };
        case actions.ADD_SCORE:
            return Object.assign({}, state, { points: action.points + state.points, clearedLines: action.clearedLines + state.clearedLines });
        default:
            return state;
    }
}

const lilTetrisApp = combineReducers({
    activeBlocks,
    currentBlock,
    nextBlock,
    gameScore,
    gameStatus
});

export default lilTetrisApp;