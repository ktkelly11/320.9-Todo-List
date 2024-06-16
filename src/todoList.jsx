import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  //  2. A list of "todo" items
  //   const initialTodos = [
  //     { number: 1, text: "Review React", completed: false },
  //     { number: 2, text: "Plan Capstone", completed: false },
  //     { number: 3, text: "Wireframe for Capstone", completed: false },
  //     { number: 4, text: "React SBA", completed: false },
  //     { number: 5, text: "Complete Capstone", completed: false },
  //     { number: 6, text: "Present Capstone", completed: false },
  //     { number: 7, text: "Graduate", completed: false },
  //   ];

  return (
    <>
      {/* 1. A heading labeling it a "todo list" */}
      <h1>Create Todo List</h1>
      <form className="new-item-form">
        {/* 3. An input element that creates new todo items and adds them to the list. */}
        <input type="text" id="item" placeholder="Add Task" />
      </form>
      <button className="button">Add</button>
      <hr />
      <ul className="list">
        <li>
          <label>
            {/* 2.1 A checkbox next to it which indicates whether it is "complete." */}
            <input type="checkbox" />
            Item 1
          </label>
          {/* 3. An "edit" button that replaces the todo string with a text input used to edit the todo. */}
          <button className="button edit">Edit</button>
          {/* 2.2 A "delete" button next to it which removes it from the list. */}
          <button className="button delete">Delete</button>
        </li>
      </ul>
    </>
  );
}
