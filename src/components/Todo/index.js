import { useState } from "react";
const Todo = ({ todo, handleDeleteTodo, handleCheckTodo }) => {
  return (
    <div style={{ display: "flex" }}>
      <label
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        htmlFor={todo.description}
      >
        {todo.description}
      </label>
      <input
        onChange={() => handleCheckTodo(todo.id)}
        id={todo.description}
        type="checkbox"
      />
      <p>{todo.done.toString()}</p>
      <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
    </div>
  );
};

export default Todo;

// Agora que consigo adicionar todos, quero poder remove-los
// Para isso
/* 
Para isso, quero criar um botão V
Ao clicar no botão, quero excluir aquele todo
Para excluir, preciso excluir aquele especifico
Para excluir, filter?
Agora esta excluindo. 
Agora quero riscar as tarefas que forem condluidas, mudar o estilo
*/
