export const Dimensions = {
    Field: {
        width: 10,
        height: 16
    },
    // what do these do???
    Square: 15,
    NextBlock: {
        width: 6,
        height: 2
    }
};

export const ActionTypes = {
    ROTATE: 'ROTATE',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
    MOVE_DOWN: 'MOVE_DOWN',
    START_GAME: 'START_GAME',
    GAME_STARTED: 'GAME_STARTED',
    NEW_BLOCK: 'NEW_BLOCK'
};

export const KeyCodes = {
    SPACE_BAR: 32,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    P: 80
};

export const Shapes = {
    I: [
        [1, 1, 1, 1]
    ],
    J: [
        [1, 0, 0],
        [1, 1, 1]
    ],
    L: [
        [0, 0, 1],
        [1, 1, 1]
    ],
    O: [
        [1, 1],
        [1, 1]
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0]
    ],
    T: [
        [0, 1, 0],
        [1, 1, 1]
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1]
    ]
};