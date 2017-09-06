const initialGrid = [];

const gridWidth = 10;
const gridHeight = 22;

for (let i=0; i<gridWidth; i++) {
    initialGrid.push([]);
}
for (let i=0; i<gridWidth; i++) {
    for (let j=0; j<gridHeight; j++) {
        initialGrid[i].push('grey');
    }
}

const pixelSize = 30;

export default {
    pixelSize: pixelSize,
    blockUnit: pixelSize,
    fieldWidth: pixelSize * gridWidth,
    fieldHeight: pixelSize * gridHeight,
    shapesMapping: [
        'I', 'J', 'L', 'O', 'S', 'T', 'Z'
    ],
    blocks: {
        I: {
            shape: [
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#857e61'
        },
        J: {
            shape: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#767522'
        },
        L: {
            shape: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#264027'
        },
        O: {
            shape: [
                    [1, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#3f5e5a'
        },
        S: {
            shape: [
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#34403a'
        },
        T: {
            shape: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#19647e'
        },
        Z: {
            shape: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
            ],
            color: '#56a3a6'
        }
    }, initialGrid
}