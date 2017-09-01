import gameConstants from '../constants/gameConstants';

function occupied(grid, x, y) {
    return grid[x][y] !== 'grey';
}

export function getActualCoordinates(newBlock) {
    const coordinates = [];
    const { shape, offsetX, offsetY } = newBlock;
    const { blockUnit } = gameConstants;
    for (let i=0; i<shape.length; i++) {
        for (let j=0; j<shape[i].length; j++) {
            if (shape[i][j]) {
                coordinates.push({ x: j + (offsetX / blockUnit), y: i + (offsetY / blockUnit) });
            }
        }
    }
    return coordinates;
}

export function getNewColoredGrid(grid, block, color) {
    const gridCopy = grid.map((x) => [...x]);
    const coords = getActualCoordinates(block);
    for (let j=0; j<coords.length; j++) {
        const { x, y } = coords[j];
        gridCopy[x][y] = color;
    }
    return gridCopy;
}

export function getCompletedLines(grid, block) {
    const linesToClear = [];
    const gridCopy = getNewColoredGrid(grid, block, 'tmp');
    const coords = getActualCoordinates(block);
    const rows = coords.reduce((prev, cur) => {
        prev[cur.y] = prev[cur.y] ? prev[cur.y] + 1 : 1;
        return prev;
    }, []);
    for (const row in rows) {
        let flag = true;
        for (let j=0; j<10; j++) {
            if (gridCopy[j][row] === 'grey') {
                flag = false;
            }
        }
        if (flag) {
            linesToClear.push(row);
        }
    }
    return linesToClear;
}

export function getNewClearedGrid(grid, block, color) {
    const linesToClear = getCompletedLines(grid, block);
    const gridCopy = getNewColoredGrid(grid, block, color);
    for (const row of linesToClear) {
        for (let j=0; j<10; j++) {
            gridCopy[j][row] = 'grey';
        }
    }
    for (let row=linesToClear[0]-1; row>=0; row--) {
        const shift = linesToClear.length;
        for (let j=0; j<10; j++) {
            gridCopy[j][row+shift] = gridCopy[j][row];
        }
    }
    return gridCopy;
}

export function rotateArray(block) {
    const matrix = block.shape;
    const n = matrix.length;
    const ret = [[], [], [], []];
    let closestX = 10;

    for (let i=0; i<n; ++i) {
        for (let j=0; j<n; ++j) {
            ret[i][j] = matrix[n - j -1][i];
            if (ret[i][j]) {
                closestX = Math.min(closestX, j);
            }
        }
    }
    const fill = new Array(closestX).fill(0);
    for (let i=0; i<n; ++i) {
        ret[i] = ret[i].slice(closestX).concat(fill);
    }
    return ret;
}

export function checkCollisions(direction, activeBlocks, currentBlock) {
    const { blockUnit } = gameConstants;
    const currentX = currentBlock.offsetX / blockUnit;
    const currentY = currentBlock.offsetY / blockUnit;
    let collision = false;
    let gameOver = false;
    let nx = 0, ny = 0;

    switch(direction) {
        case 'left':
            nx = -1;
            break;
        case 'right':
            nx = 1;
            break;
        case 'down':
            ny = 1;
            break;
        default:
            break;
    }

    for (let i=0; i<currentBlock.shape.length; i++) {
        for (let j=0; j<currentBlock.shape[i].length; j++) {
            const coord = currentBlock.shape[i][j];
            if (coord) {
                const totalX = nx + currentX + j;
                const totalY = ny + currentY + i;
                if (totalX < 0 || totalY >= 22 || totalX >= 10 || occupied(activeBlocks, totalX, totalY)) {
                    collision = true;
                }
                if (collision && currentY === 0 && direction === 'down') {
                    gameOver = true;
                }
            }
        }
    }
    return gameOver ? 'GAME_OVER' : collision;
}