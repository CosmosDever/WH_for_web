import React, { useState } from "react";
import "./App.css";
function App() {
  const [initialTasks, setInitialTasks] = useState([
    {
      id: 1,
      title: "eat",
      completed: false,
    },
    {
      id: 2,
      title: "sleep",
      completed: false,
    },
    {
      id: 3,
      title: "code",
      completed: false,
    },
  ]);
  const [alltask, setallTask] = useState(initialTasks);
  const handleCheck = (id) => {
    setInitialTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setallTask((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleFilter = () => {
    setShowAll(false);
    let filteredTasks = initialTasks.filter((task) => !task.completed);
    setInitialTasks(filteredTasks);
    console.log(filteredTasks);
  };
  const handleShowAll = () => {
    setInitialTasks(alltask);
    setShowAll(true);
  };
  const [showAll, setShowAll] = useState(true);
  return (
    <div>
      <div>
        <input type="button" value="See all" onClick={handleShowAll} />
        <input type="button" value="Hide Finish" onClick={handleFilter} />
      </div>
      {showAll
        ? initialTasks.map((task) => (
            <div key={task.id}>
              <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => handleCheck(task.id)}
              />
              <label className="todo-label">{task.title}</label>
            </div>
          ))
        : initialTasks.map((task) => {
            return (
              <div key={task.id}>
                <input
                  id={task.id}
                  type="checkbox"
                  defaultChecked={task.completed}
                  onChange={() => handleCheck(task.id)}
                />
                <label className="todo-label">{task.title}</label>
              </div>
            );
          })}
    </div>
  );
}
export default App;
