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

  const handleClick = () => {
    const todo = { description: value, id: Math.random(), done: false };
    setTodos([...todos, todo]);
  };

  // Adicionar estrutura, funcionalidade, estado, estilo
  // Meu input está pronto, agora eu quero adicionar oq escrevo na lista do map.
  // Bom, adicionei oq eu escrevo no estado, agora quero adicionar o estado no todos hmm
  // Blz, resolvi o problema fazendo a função handleClick
  // Agora que consigo adicionar os todos, quero poder marcar-los quando eles estiverem prontos.
  // Fazer o botão para apagar e altrerar

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

        <button onClick={handleClick} type="submit">
          <AddTodoImg src={AddTodoLogo} />
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo}></Todo>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
