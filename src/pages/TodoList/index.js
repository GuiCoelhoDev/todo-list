import AddTodoLogo from "../../assets/images/plus.png";
import { AddTodoImg } from "./styles";

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
        <input required type="text"></input>

        <button type="submit">
          <AddTodoImg src={AddTodoLogo} />
        </button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
