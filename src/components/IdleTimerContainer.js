import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import { Modal } from "antd";

const IdleTimerContainer = () => {
  const idleTimerRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const _onIdle = () => {
    setModalIsOpen(true);
    console.log("You are idle for 5 seconds");
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    console.log("User has logged out");
  };

  const stayLoggedIn = () => {
    setModalIsOpen(false);
    console.log("User is active");
  };

  return (
    <>
      {isLoggedIn ? <h2> Hello </h2> : <h2> You are logged out</h2>}

      <Modal
        title="modal"
        visible={modalIsOpen}
        footer={[]}
        closable={true}
        onCancel={() => {
          setModalIsOpen(false);
        }}
      >
        <h2> You have been Idle for a while</h2>
        <p>You'll be logged out soon</p>
        <button onClick={logOut}>Log me out</button>
        <button onClick={stayLoggedIn}>Keep me signed in</button>
      </Modal>

      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={_onIdle}
      ></IdleTimer>
    </>
  );
};

export default IdleTimerContainer;
