import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Dice, setDice] = useState([1, 1, 1]);

  function Roll() {
    setCount((count) => count + 1);
    setDice(Dice.map(() => Math.floor(Math.random() * 6) + 1));
  }

  function showDice() {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        {Dice.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }
  return (
    <>
      <div>Roll {count}</div>
      <div>
        <button onClick={() => Roll()}>click to Roll</button>
      </div>
      {showDice()}
    </>
  );
}

export default App;
