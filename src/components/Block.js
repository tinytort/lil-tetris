import React from 'react';
import PropTypes from 'prop-types';
import { Rect, Group } from 'react-konva';
import GameConstants from '../constants/gameConstants';

const { blockUnit } = GameConstants;

function getCoordinates(shape) {
    const coordinates = [];
    for (let i=0; i<shape.length; i++) {
        for (let j=0; j<shape[i].length; j++) {
            if (shape[i][j]) {
                coordinates.push({ x: j, y: i});
            }
        }
    }
    return coordinates;
}

function blockGroup(xs, ys, color) {
    const arr = [];
    for (let i=0; i<xs.length; i++) {
        arr.push(<Rect key={i} width={blockUnit} height={blockUnit} x={xs[i]} y={ys[i]} fill={color} stroke="black" strokeWidth={5} />);
    }
    return arr;
}

const Block = ({ shape, offsetX, offsetY, color }) => {
    const coordinates = getCoordinates(shape);
    const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
    const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);
    return (
        <Group>
            {blockGroup(xs, ys, color)}
        </Group>
    );
};

Block.propTypes = {
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    shape: PropTypes.array,
    color: PropTypes.string
};

export default Block;