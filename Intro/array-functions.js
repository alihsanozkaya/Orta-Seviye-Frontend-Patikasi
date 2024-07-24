const users = ["Mehmet", "Ahmet", "Murat"];

const footballPlayers = [
  {
    name: "Ricardo",
    surname: "Quaresma",
    age: 40,
  },
  {
    name: "Mario",
    surname: "Gomez",
    age: 39,
  },
  {
    name: "Domagoj",
    surname: "Vida",
    age: 35,
  },
];

console.log(users);

// push
users.push("Ayşe");
console.log("Push yapılmış hali", users);

// map
console.log("Map yapılmış hali");
users.map((user) => {
  console.log(user);sadas
});

// find
console.log("Find yapılmış hali");
const result = users.find((item) => item === "Mehmet");
console.log(result);

const footballPlayerFind = footballPlayers.find(
  (item) => item.surname === "Gomez" && item.age > 30
);
console.log(
  `Futbolcu bulundu ${footballPlayerFind.name} ${footballPlayerFind.surname} Yaşı ${footballPlayerFind.age}`
);

// filter
console.log("Filter yapılmış hali");
const filtered = footballPlayers.filter((item) => item.age > 35);
console.log("35 yaşından büyük futbolcular", filtered);

// some
console.log("Some yapılmış hali");
const some = footballPlayers.some((item) => item.age === 35);
console.log(some);

// every
console.log("Every yapılmış hali");
const every = footballPlayers.every((item) => item.age > 37);
console.log(every);

// includes
console.log("Includes yapılmış hali");
const fruits = ["Elma", "Armut", "Muz"];
const isInculed = fruits.includes("Armut");
console.log(isInculed);