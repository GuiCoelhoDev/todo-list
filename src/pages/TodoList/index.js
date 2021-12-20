const TodoList = () => {
  const todos = [
    { description: "Pensar sobre viagem SP", done: true },
    { description: "Pensar sobre ano novo", done: false },
    { description: "Terminar Todo", done: false },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return <div>{todo.description}</div>;
      })}
    </div>
  );
};

export default TodoList;
