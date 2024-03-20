import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [newNum, setNewNum] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNum(value);
    setNewNum(value);
  };

  return (
    <>
      <form>
        <label>
          Counter:
          <input type="number" value={newNum} onChange={handleChange} />
        </label>
      </form>

      <button onClick={() => setNewNum(newNum + 1)}>Increment + 1</button>
      <button onClick={() => setNewNum(newNum - 1)}>Decrement - 1</button>
      <button onClick={() => setNewNum(newNum / 2)}>Divide by 2</button>
      <button onClick={() => setNewNum(num)}>Reset</button>
    </>
  );
}

export default App;
