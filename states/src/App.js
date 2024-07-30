import {useState} from "react";

function App() {
  const [name, setName] = useState("Ali");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Mert", "Semih"]);
  const [address, setAddress] = useState({contry: "Turkey", city: "Gaziantep", zip: 27560});

  return (
    <>
      <div className="App">
        <h1>Merhaba {name}!</h1>
        <h2>{age}</h2>
        <button onClick={() => setName("Ahmet")}>Change name</button>
        <button onClick={() => setAge(25)}>Change age</button>
        <hr/><br/>
        
        <h2>Friends</h2>
        {friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))}
        <br/>
        <button onClick={() => setFriends(["Ciro", ...friends])}>Add new friend</button>
        <button onClick={() => setFriends([...friends, "Rafa"])}>Add new friend</button>

        <h2>Address</h2>
        <div>{address.contry}/{address.city}/{address.zip}</div>
        <br />
        <button onClick={() => setAddress({...address, city: "Konya", zip: 42250})}>Change the address</button>
      </div>
    </>
  );
}

export default App;
