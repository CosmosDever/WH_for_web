import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const value = [1, 2, 3, 4, 5];

  return (
    <>
      <div>count {count}</div>
      <select
        name="selectedcount"
        onChange={(e) => setCount(count + parseInt(e.target.value))}
      >
        {value.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
