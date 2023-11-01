import React from "react";

const SecondHandle = ({second}) => {
    return (
        <div
            className="sec_hand"
            style={{
                transform: `rotateZ(${second * 6}deg)`
            }}
        />
    );
};

export default SecondHandle;