import "./App.css";
import Header from "../src/components/Header";
import User from "../src/components/User";

const name = "Ali İhsan";
const surname = "Özkaya";
const isLoggedIn = true;
const friends = [
  {
    id: 1,
    name: "Mert"
  },
  {
    id: 2,
    name: "Semih"
  },
  {
    id: 3,
    name: "Salih"
  }
]
function App() {
  return (
    <>
      <Header />
      <User
        name="Ali"
        surname="Özkaya"
        // isLoggedIn={true}
        age={24}
        friends={friends}
        address={{
          title: "Şehitkamil/Gaziantep",
          zip: 27560
        }}
      />
      <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      <label htmlFor="myInput">
        Name
        <input id="myInput" />
      </label>
      <br />
      <h3>
        {isLoggedIn
          ? `Benim Adım: ${name} Soyadım: ${surname}`
          : "Giriş yapmadınız"}
      </h3>
    </>
  );
}

export default App;
