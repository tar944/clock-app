import React from "react";

const MinuteHandle = ({minute}) => {
    return (
        <div
            className="min_hand"
            style={{
                transform: `rotateZ(${minute* 6}deg)`
            }}
        />
    );
};

export default MinuteHandle;