import React, { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState(0);
  const [dice, setDice] = useState([]);

  function roll() {
    const newDice = Array.from(
      { length: dice.length },
      () => Math.floor(Math.random() * 6) + 1
    );
    setDice(newDice);
    const newSum = newDice.reduce((a, b) => a + b, 0);
    setSum(newSum);
  }

  function showDice() {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        {dice.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }

  return (
    <>
      <form>
        <label>
          Number of dice:
          <input
            type="number"
            value={dice.length}
            onChange={(e) => {
              const numDice = parseInt(e.target.value);
              setDice(Array(numDice).fill(0));
              setSum(0);
            }}
          />
        </label>
      </form>

      <div>
        <button onClick={() => roll()}>Click to Roll</button>
      </div>
      {showDice()}
      <div>SUM {sum}</div>
    </>
  );
}

export default App;
