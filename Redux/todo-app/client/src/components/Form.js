import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { addTodoAsync } from "../redux/todos/services";
import Loading from "./Loading";
import Error from "./Error";

const Form = () => {
  const [title, setTitle] = useState("");
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (!title) {
      return;
    }
    e.preventDefault();
    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error />}
    </form>
  );
};

export default Form;
