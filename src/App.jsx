import { useReducer, useState } from "react";
import "./App.css";
import ToDoList from "./todoList";
import ToDoReducer from "./todoReducer";

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
