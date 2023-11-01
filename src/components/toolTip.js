import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

const ToolTip = ({top, left}) => {
    const {hour, minute, second} = useSelector(state => state.clock);
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(ref.current.offsetHeight);
    }, []);
    return (
        <span ref={ref} className="tool_tip" style={{
            top: `${top - height}px`,
            left: `${left}px`
        }}>{`${hour > 10 ? hour : `0${hour}`}:${minute > 10 ? minute : `0${minute}`}:${second > 10 ? second : `0${second}`}`}</span>
    );
};

export default ToolTip;