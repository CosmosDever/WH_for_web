import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 10,
  });
  const [savedTime, setSavedTime] = useState({
    minutes: 0,
    seconds: 10,
  });

  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setTime({
      minutes: savedTime.minutes,
      seconds: savedTime.seconds,
    });
    setSavedTime({
      minutes: savedTime.minutes,
      seconds: savedTime.seconds,
    });
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.minutes === 0 && prevTime.seconds === 0) {
            clearInterval(interval);
            setIsRunning(false);
            return { minutes: 0, seconds: 0 };
          }

          if (prevTime.seconds === 0) {
            return {
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              minutes: prevTime.minutes,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const handleMinutesChange = (e) => {
    if (parseInt(e.target.value) < 0) {
      return;
    }
    if (parseInt(e.target.value) > 60) {
      return;
    }
    setTime({
      minutes: parseInt(e.target.value),
      seconds: time.seconds,
    });
    setSavedTime({
      minutes: parseInt(e.target.value),
      seconds: time.seconds,
    });
  };

  const handleSecondsChange = (e) => {
    if (parseInt(e.target.value) < 0) {
      return;
    }
    if (parseInt(e.target.value) > 59) {
      return;
    }
    setTime({
      minutes: time.minutes,
      seconds: parseInt(e.target.value),
    });
    setSavedTime({
      minutes: time.minutes,
      seconds: parseInt(e.target.value),
    });
  };

  return (
    <div>
      <input
        type="number"
        value={savedTime.minutes}
        onChange={handleMinutesChange}
      />
      :
      <input
        type="number"
        value={savedTime.seconds}
        onChange={handleSecondsChange}
      />
      <h1>
        Time left {time.minutes ? formatTime(time.minutes) : formatTime(0)}:
        {time.seconds ? formatTime(time.seconds) : formatTime(0)} seconds
      </h1>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      {time.minutes === 0 && time.seconds === 0 && <h1>Time out</h1>}
    </div>
  );
}

export default App;
