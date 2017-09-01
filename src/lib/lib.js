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