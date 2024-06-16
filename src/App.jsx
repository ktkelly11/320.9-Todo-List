import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Create Todo List</h1>
      <form className="new-item-form">
        <input type="text" id="item" placeholder="Add Task" />
      </form>
      <button className="button">Add</button>
      <hr />
    </>
  );
}

export default App;
