import React from 'react';

function Heading({ children, isRed }) {
    let style = '';
    if (isRed) {
        style = 'red';
    } else {
        style = 'blue';
    }
    return (
        <h1 className={style}>{children}</h1>
    )
}

export default Heading;
