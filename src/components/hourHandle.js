import React from "react";

const HourHandle = ({hour}) => {
    return (
        <div
            className="hour_hand"
            style={{
                transform: `rotateZ(${hour * 30}deg)`
            }}
        />
    );
};

export default HourHandle;