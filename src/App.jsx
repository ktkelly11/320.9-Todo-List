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

const initialTodos = [
  { number: 1, item: "Review React" },
  { number: 2, item: "Plan Capstone" },
  { number: 3, item: "Wireframe for Capstone" },
  { number: 4, item: "React SBA" },
  { number: 5, item: "Complete Capstone" },
  { number: 6, item: "Present Capstone" },
  { number: 7, item: "Graduate" },
];

export default App;
