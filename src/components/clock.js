import React, {useEffect, useRef, useState} from "react";
import {store} from "../redux";
import {useSelector} from 'react-redux';
import Number from "./number";
import HourHandle from "./hourHandle";
import MinuteHandle from "./minuteHandle";
import SecondHandle from "./secondHandle";
import ToolTip from "./toolTip";

const Clock = () => {
    const {hour,minute,second} = useSelector(state=>state.clock);
    const numbers =[1,2,3,4,5,6,7,8,9,10,11,12];
    const [showToolTip, setShowToolTip] = useState(false);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const body = useRef(null);

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            store.dispatch({
                type: "clock/setClock",
                payload: {
                    hour: time.getHours(),
                    minute: time.getMinutes(),
                    second: time.getSeconds()
                }
            });
        }, 1000);
    }, [])

    const onMouseMove=(e)=>{
        setLeft((e.clientX+(body.current.offsetWidth/2)) - body.current.offsetLeft);
        setTop((e.clientY +(body.current.offsetHeight/2))- body.current.offsetTop);
    }

    return (
        <div className="clock"
             ref={body}
             onMouseMove={(e) => onMouseMove(e)}
             onMouseEnter={()=>setShowToolTip(true)}
             onMouseLeave={()=>setShowToolTip(false)}
        >
            {showToolTip?<ToolTip top={top} left={left}></ToolTip>:""}
            <span className="name">Mori vazife shenas</span>
            <HourHandle hour={hour}></HourHandle>
            <MinuteHandle minute={minute}></MinuteHandle>
            <SecondHandle second={second}></SecondHandle>
            {
                numbers.map((num)=>{
                    return <Number number={num} style={`num_${num}`}></Number>
                })
            }
        </div>
    );
};

export default Clock;