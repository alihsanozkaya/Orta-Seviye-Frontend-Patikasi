import logo from './logo.svg';
import './App.css';
import {useMemo, useState, useCallback} from "react";
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // const data = useMemo(() => {
  //   return [{name: "Ali"}, {name: "Mehmet"}]
  // }, []);
  const data = useMemo(() => {
    return calculateObject(number)
  }, [number]);
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, [number]);
  // const data = calculateObject(); //
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} increment={increment}/>
      <hr/>
      <h1>{number}</h1>
      <br/>
      <br/>
      <input value={text} onChange={({target}) => setText(target.value)}/>
    </div>
  );
}

function calculateObject(number) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Calculating completed!");

  return {name: "Ali", number};
}

export default App;
