const Todo = ({ todo, handleDeleteTodo }) => {
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor={todo.description} key={todo.key}>
        {todo.description}
      </label>
      ;
      <input id={todo.description} type="checkbox" />
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
*/
