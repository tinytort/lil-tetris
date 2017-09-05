import React from 'react';

export function Stage({height, width, children}) {
    return(
        <div style={{ position: "relative", height, width }}>
            { children }
        </div>
    )
}

export function Rect({width, height, x, y, fill, stroke, strokeWidth}) {
    return(
        <div style={{ 
            position: "absolute",
            boxSizing: "border-box",
            top: y,
            left: x,
            width,
            height,
            background: fill,
            borderWidth: strokeWidth,
            borderColor: stroke
         }}>

        </div>
    )
}