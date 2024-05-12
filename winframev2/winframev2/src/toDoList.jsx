import React, { useState } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;
    setTask(value);
  }

  function handleButtonClick() {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    } else {
      alert("Please enter a task!");
    }
  }

  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_t, tIndex) => tIndex !== index));
  }

  function handleDone() {
    alert(`Congratulations! You've completed 1 task out of ${tasks.length}.`);
  }

  return (
    <div className="h-full flex flex-col ">
      <div className="flex items-center justify-center h-14 bg-slate-400 ">
        <form
          className="p-5 m-6 w-full border border-slate-900 rounded-2xl"
          onSubmit={(event) => {
            event.preventDefault();
            handleButtonClick();
          }}
        >
          <div className="flex  gap-2 h-2 items-center justify-between">
            <div className="flex-grow">
              <input
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                value={task}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter a task"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-4 py-2 rounded-lg bg-slate-300 hover:bg-slate-400 text-white font-medium"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <ul className="flex flex-col p-2 pb-14 w-full h-3/4 overflow-y-auto flex-grow">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-slate-300 hover:bg-slate-200 shadow-sm"
          >
            <span className="text-base text-slate-200 overflow-y-auto pl-8 font-medium">{task}</span>
            <div className="flex gap-2">
              <button
                onClick={handleDone}
                className="px-3 py-2 rounded-lg bg-green-400 hover:bg-green-600 text-white font-medium"
              >
                Done
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
