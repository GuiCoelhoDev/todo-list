const TodoList = () => {
  const todos = [
    { description: "Pensar sobre viagem SP", id: Math.random(), done: true },
    { description: "Pensar sobre ano novo", id: Math.random(), done: false },
    { description: "Terminar Todadsaso", id: Math.random(), done: false },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text"></input>

        <input type="button"></input>
      </div>
      <div>
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.description}</div>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
