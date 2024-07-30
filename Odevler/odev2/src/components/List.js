import React from "react";

const List = ({ todos, setTodos, filter }) => {
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.done;
    }
    if (filter === "completed") {
      return todo.done;
    }
    return true;
  });

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange={() => {
        const allDone = todos.every(todo => todo.done);
        setTodos(todos.map(todo => ({ ...todo, done: !allDone })));
      }} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li className={todo.done ? "completed" : ""} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)}
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => removeTodo(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;