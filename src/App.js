import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Todo from "./component/todo";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [todoCurrent, setTodoCurrent] = useState({});

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

    setValueInput("");
  };

  const handleDelete = (e, idTodo) => {
    e.preventDefault();
    const data = todos.filter((item) => item.id !== idTodo);
    setTodos(data);
  };

  const handleClickEdit = (e, todo) => {
    e.preventDefault();
    setIsEdit(true);
    setValueInput(todo.value);
    setTodoCurrent(todo);
  };

  const handleUpdateData = (e) => {
    e.preventDefault();
    const indexTodoEdit = todos.findIndex((item) => item.id === todoCurrent.id);
    const todo = {
      ...todoCurrent,
      value: valueInput,
    };
    const newTodos = [...todos];
    newTodos.splice(indexTodoEdit, 1, todo);
    setTodos(newTodos);
    setValueInput("");
  };

  return (
    <form action="">
      <h1 className="header">My Todo-s</h1>
      <div className="add-todo">
        <input
          id="input"
          type="text"
          onChange={handleChangeInput}
          value={valueInput}
        />
        {isEdit ? (
          <Button
            id="add"
            onClick={handleUpdateData}
            content="Edit"
            bgColor="blue"
          />
        ) : (
          <Button
            id="add"
            onClick={handleAddTodoList}
            content="Add"
            bgColor="blue"
          />
        )}
      </div>

      <hr />

      <div className="toolbar">
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
          <Todo
            todo={item}
            handleDeleteFunction={handleDelete}
            handleClickEditFunction={handleClickEdit}
          />
        ))}
      </ul>
    </form>
  );
}

export default App;
// hook
