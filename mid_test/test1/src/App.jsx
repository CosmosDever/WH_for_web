import React, { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState(0);
  const [dice, setDice] = useState([]);
  const [numDice, setNumDice] = useState({ num: 0 });

  function roll() {
    const newDice = Array.from(
      { length: numDice.num },
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

  const handleNumChange = (e) => {
    const value = parseInt(e.target.value);
    setNumDice({ num: value });
    setDice(Array(value).fill(0));
    setSum(0);
  };

  return (
    <>
      <form>
        <label>
          Number of dice:
          <input type="number" value={numDice.num} onChange={handleNumChange} />
        </label>
      </form>

      <div>
        <button onClick={roll}>Click to Roll</button>
      </div>
      {showDice()}
      <div>SUM {sum}</div>
    </>
  );
}

export default App;
