import React from "react";

const Footer = ({ todos, setTodos, setFilter, filter }) => {
  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.length - activeCount;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a 
            href="#/"
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a 
            href="#/"
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a 
            href="#/"
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
