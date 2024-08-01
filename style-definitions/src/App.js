import "./App.css";
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ color: "red", backgroundColor: "white", paddingTop: 50 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          impedit similique quaerat distinctio, et veritatis accusamus voluptate
          magnam ut delectus maiores nostrum, quae nemo odit perferendis eveniet
          velit dolorem? Veniam?
        </div>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div> */}
        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
