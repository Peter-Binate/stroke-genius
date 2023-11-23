
import React, { useState, useRef, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const Ref = useRef(null);

  // Utilisez une variable d'état pour suivre si le timer a déjà été démarré
  const [hasTimerStarted, setTimerStarted] = useState(false);

  // Utilisez une variable d'état pour suivre l'état du bouton
  const [isTimerRunning, setTimerRunning] = useState(false);

  // The state for our timer
  // La valeur initiale de timer est modifiée pour afficher 60 au chargement
  const [timer, setTimer] = useState('00:00:60');

  const clearTimer = (e) => {
    setTimer('00:00:60');

    if (Ref.current) clearInterval(Ref.current);

    if (isTimerRunning && !hasTimerStarted) {
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    }
  }

  // Time Remaining (Temps restant)
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const getDeadTime = () => {
    let deadline = new Date();
    // This is where you need to adjust if
    // you intend to add more time
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
    // Change l'état du bouton après le chargement initial
    setTimerRunning(true);
  }, []);

  const onClickStartReset = () => {
    if (!hasTimerStarted) {
      // Si le timer est en cours et n'a pas encore commencé, cliquez pour démarrer
      setTimerStarted(true);
      clearTimer(getDeadTime());
    } else {
      // Si le timer est en cours et a déjà commencé, cliquez pour réinitialiser et relancer
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
  )
}

export default Timer;
