import AddTodoLogo from "../../assets/images/plus.png";
import { AddTodoImg } from "./styles";
import { useState } from "react";
import Todo from "../../components/Todo";

const TodoList = () => {
  const initialTodos = [
    { description: "Pensar sobre viagem SP", id: Math.random(), done: true },
    { description: "Pensar sobre ano novo", id: Math.random(), done: false },
    { description: "Terminar Todadsaso", id: Math.random(), done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState("");

  function handleAddTodo() {
    const todo = { description: value, id: Math.random(), done: false };
    setTodos([...todos, todo]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id)); //se for true, continua na lista
  }

  return (
    <div>
      <h1>GuiK's todo list</h1>
      <div>
        <label htmlFor="addTodoHere">Add Todo Here: </label>
        <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          name="addTodoHere"
          id="addTodoHere"
          required
          type="text"
        ></input>

        <button onClick={handleAddTodo} type="submit">
          <AddTodoImg src={AddTodoLogo} />
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <Todo handleDeleteTodo={handleDeleteTodo} todo={todo}></Todo>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
