import React, { useState, useRef, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const Ref = useRef(null);

  const [hasTimerStarted, setTimerStarted] = useState(false);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [timer, setTimer] = useState('01:00');

  const clearTimer = (e) => {
    setTimer('01:00');

    if (Ref.current) clearInterval(Ref.current);

    if (isTimerRunning && !hasTimerStarted) {
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    }
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      // Update the timer
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) +
        ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      );
    }
  }

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 1); // Ajouter 1 minute
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
    setTimerRunning(true);
  }, []);

  const onClickStartReset = () => {
    if (!hasTimerStarted) {
      setTimerStarted(true);
      clearTimer(getDeadTime());
    } else {
      setTimerStarted(false);
      clearTimer(getDeadTime());
    }
  }

  return (
    <>
      <div id="timer-container">
        <h1 id='timer-text'>{timer}</h1>
        <button id="timer-button" className='button' onClick={onClickStartReset}>
          {!hasTimerStarted ? 'Start' : 'Reset'}
        </button>
      </div>
    </>
  );
}

export default Timer;
