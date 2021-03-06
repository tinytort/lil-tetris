import React from 'react';
import { Rect } from './Stage';
import gameConstants from '../constants/gameConstants';

const { blockUnit, pixelSize } = gameConstants;

const BlockList = ({ grid }) => {
    const arr = [];
    grid.forEach((val, i) => {
        val.forEach((block, j) => {
            if (block !== 'grey') {
                const key = JSON.stringify({ x: i, y: j });
                arr.push(<Rect key={key} width={blockUnit} height={blockUnit} x={i * pixelSize} y={j * pixelSize} fill={block} stroke="black" strokeWidth={8} />)
            }
        });
    });
    return <div>{ arr }</div>;
};

export default BlockList;