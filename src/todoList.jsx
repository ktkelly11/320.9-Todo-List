export default function ToDoList() {
  return (
    <>
      {/* 1. A heading labeling it a "todo list" */}
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
      </ul>
    </>
  );
}
