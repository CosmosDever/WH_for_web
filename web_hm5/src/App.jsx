import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickButton() {
    setIsOpen(!isOpen);
  }

  const munulist = ["love you", "too much", "very much"];
  const menuRef = useRef(false);
  useEffect(() => {
    function handleClickoutMenu(event) {
      if (isOpen && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("pointerdown", handleClickoutMenu);

    return () => {
      window.removeEventListener("pointerdown", handleClickoutMenu);
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={handleClickButton}>Menu</button>
      <div style={{ padding: "5px" }} className="menuwindow">
        {isOpen && (
          <div
            ref={menuRef}
            style={{
              border: "1px solid black",
              backgroundColor: "yellow",
              padding: "5px",
              width: "100px",
            }}
          >
            {munulist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
