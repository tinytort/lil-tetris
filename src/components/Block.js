import React from 'react';
import PropTypes from 'prop-types';
import { Rect } from './Stage';
import gameConstants from '../constants/gameConstants';

const { blockUnit } = gameConstants;

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

function BlockGroup(xs, ys, color) {
    const arr = [];
    for (let i=0; i<xs.length; i++) {
        arr.push(<Rect key={i} width={blockUnit} height={blockUnit} x={xs[i]} y={ys[i]} fill={color} stroke="black" strokeWidth={5} />);
    }
    console.log('Block Group arr', arr);
    return <div>{ arr }</div>;
}

const Block = ({ shape, offsetX, offsetY, color }) => {
    const coordinates = getCoordinates(shape);
    const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
    const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);
    return (
        <div>{BlockGroup(xs, ys, color)}</div>
    );
};

Block.propTypes = {
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    shape: PropTypes.array,
    color: PropTypes.string
};

export default Block;