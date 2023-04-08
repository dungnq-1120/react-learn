const Todo = (props) => {
  const { todo, handleDeleteFunction, handleClickEditFunction } = props;
  return (
    <li className="todo-item">
      <input id="input-1" type="checkbox" checked={todo.isDone} />
      <label htmlFor="input-1">{todo.value}</label>
      <button
        className="delete"
        onClick={(e) => handleDeleteFunction(e, todo.id)}
      >
        x
      </button>
      <button
        className="edit"
        onClick={(e) => handleClickEditFunction(e, todo)}
      >
        edit
      </button>
    </li>
  );
};

export default Todo;
