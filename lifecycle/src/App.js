import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisiable, setIsVisiable] = useState(true);
  return (
    <div className="App">
      {isVisiable && <Counter />}

      <button onClick={() => setIsVisiable(!isVisiable)}>Toggle</button>
    </div>
  );
}
export default App;
