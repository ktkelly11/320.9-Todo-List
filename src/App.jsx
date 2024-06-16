import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <h1>Create Todo List</h1>
      <form className="new-item-form">
        <input type="text" id="item" placeholder="Add Task" />
      </form>
      <button className="button">Add</button>
      <hr />
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="button edit">Edit</button>
          <button className="button delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="button edit">Edit</button>
          <button className="button delete">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
