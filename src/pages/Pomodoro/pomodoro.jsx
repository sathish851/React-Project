import { useState, useEffect, useRef } from "react";
import './pomodoro.css'

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [title, setTitle] = useState("Pomodoro Timer");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((time) => {
          if (time >= 1) {
            return time - 1;
          } else {
            sendNotification();
            clearInterval(intervalRef.current);
            setTitle("Time's Up!");
            setIsRunning(false);
            return time;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function sendNotification() {
    const notification = new window.Notification("Time's Up!", {
      body: "The timer has finished!",
      icon: "favicon.ico",
    });

    notification.addEventListener("click", () => {
      window.focus();
      notification.close();
    });
  }

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
    setTitle("Pomodoro Timer");
    setTime(25 * 60);
  }

  function handleReset() {
    setTime(25 * 60);
  }

  function formatTime() {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="timer">
      <h1 className="time">{formatTime()}</h1>
      <div className="controls">
        {!isRunning && <button className="control-btn" onClick={handleStart}>Start</button>}
        {isRunning && <button className="control-btn" onClick={handleStop}>Stop</button>}
        <button className="control-btn" onClick={handleReset}>Reset</button>
      </div>
      <div className="actions">
        <button className="btn" onClick={() => setTime(25 * 60)}>Pomodoro</button>
        <button className="btn" onClick={() => setTime(5 * 60)}>Short Break</button>
        <button className="btn" onClick={() => setTime(10 * 60)}>Long Break</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
