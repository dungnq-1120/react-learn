const Todo = (props) => {
  const { todo } = props;
  return (
    <li class="todo-item">
      <input id="input-1" type="checkbox" checked={todo.isDone} />
      <label for="input-1">{todo.value}</label>
      <button class="delete">x</button>
      <button class="edit">edit</button>
    </li>
  );
};

export default Todo;
