import React from "react";

const Number = ({number,style}) => {
    return (
        <span
            className={style}
            onMouseOut={null}
            onMouseEnter={null}
        >{number}</span>
    );
};

export default Number;