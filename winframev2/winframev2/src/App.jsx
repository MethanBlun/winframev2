import React from "react";
import Quote from "./quote";
import Todolist from "./toDoList";
import "./App.css";


function App() {
  return (
    <>
      <div className=" bg-slate-400 flex flex-col  h-full">
        <div className=" bg-orange-300  h-40"><Quote/></div>



        <div className=" bg-slate-500  h-2/6"><Todolist/></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
