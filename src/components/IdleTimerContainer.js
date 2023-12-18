import React, { useId, useRef } from "react";
import IdleTimer from "react-idle-timer";

const IdleTimerContainer = () => {
  const idleTimerRef = useRef(null);

  const _onIdle = () => {
    console.log("user is idle");
  };

  return (
    <IdleTimer
      ref={idleTimerRef}
      timeout={5 * 1000}
      onIdle={_onIdle}
    ></IdleTimer>
  );
};

export default IdleTimerContainer;
