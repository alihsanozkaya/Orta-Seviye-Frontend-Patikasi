import "./components/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import List from "./components/List";

const initialData = [
  { text: "Taste JavaScript", done: true },
  { text: "Code furiously", done: true },
  { text: "Promote Mavo", done: false },
  { text: "Give talks", done: false },
  { text: "Write tutorials", done: true },
  { text: "Have a life!", done: false }
];

function App() {
  const [todos, setTodos] = useState(initialData);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log(todos);
  }, [todos])  
  return (
    <>
      <div className="todoapp">
        <Header addTodo={setTodos} todos={todos}/>
        <List todos={todos} setTodos={setTodos} filter={filter}/>
        <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} filter={filter}/>
      </div>
    </>
  );
}

export default App;
