const Todo = ({ todo }) => {
  return <li key={todo.key}>{todo.description}</li>;
};

export default Todo;
