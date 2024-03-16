import React, { useState, useEffect } from "react";

function Watch() {
  const [seconds, setSeconds] = useState(10);
  const handleReset = () => {
    setSeconds(10);
    setIsRunning(false);
  };
  function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
  const [isRunning, setIsRunning] = useState(false);
  function PauseAndResume() {
    const toggleTimer = () => {
      setIsRunning(!isRunning);
    };
    useEffect(() => {
      console.log(isRunning);
      if (isRunning === true) {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
              clearInterval(interval);
              return 0;
            }
            return prevSeconds - 1;
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <button onClick={toggleTimer}>{isRunning ? "Pause" : "Resume"}</button>
    );
  }
  return (
    <div>
      <h1>Time left {seconds} seconds</h1>
      <Reset onReset={handleReset} />
      <PauseAndResume />
    </div>
  );
}

function App() {
  return (
    <>
      <Watch />
    </>
  );
}

export default App;
