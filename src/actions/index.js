import { ActionTypes } from '../constants';

export function rotate() {
    return {
        type: ActionTypes.ROTATE
    };
}

export function moveLeft() {
    return {
        type: ActionTypes.MOVE_LEFT
    };
}

export function moveRight() {
    return {
        type: ActionTypes.MOVE_RIGHT
    };
}

export function moveDown() {
    return {
        type: ActionTypes.MOVE_DOWN
    };
}

export function newBlock() {
    return (dispatch, getState) => {
        const intervalId = setInterval(() => {
            dispatch(moveDown());
        }, 1000 / (getState().game.level + 1));
        dispatch({ type: ActionTypes.NEW_BLOCK, payload: { intervalId }});
    };
}

export function startGame() {
    return (dispatch, getState) => {
        const intervalId = setInterval(() => {
            dispatch(moveDown());
        }, 1000);
        dispatch({ type: ActionTypes.START_GAME, payload: { intervalId }});
    };
}

export default {
    rotate,
    moveLeft,
    moveRight,
    moveDown,
    newBlock,
    startGame
};