import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./component/todo";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleAddTodoList = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        value: valueInput,
        isDone: false,
      },
    ]);
  };
  return (
    <form action="">
      <h1 class="header">My Todo-s</h1>
      <div class="add-todo">
        <input id="input" type="text" onChange={handleChangeInput} />
        <button id="add" onClick={handleAddTodoList}>
          Add
        </button>
      </div>

      <hr />

      <div class="toolbar">
        <span>Filter</span>
        <select name="" id="filter">
          <option value="All" selected>
            All
          </option>
          <option value="Done">Done</option>
          <option value="Unfinished">Unfinished</option>
        </select>

        <span>Sort</span>
        <select name="" id="sort">
          <option value="All" selected>
            All
          </option>
          <option value="Done">Done</option>
          <option value="Unfinished">Unfinished</option>
        </select>
      </div>

      <ul id="todo-list">
        {todos.map((item) => (
          <Todo todo={item} />
        ))}
      </ul>
    </form>
  );
}

export default App;
// hook
