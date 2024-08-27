import React, { useState } from "react";
const initialTodo = { text: "", done: false };

const Header = ({ todos, addTodo }) => {
  const [form, setForm] = useState(initialTodo);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }
    addTodo([...todos, form]);
    setForm(initialTodo);
  };

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="text"
          placeholder="What needs to be done?"
          autoFocus
          value={form.text}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
};

export default Header;
