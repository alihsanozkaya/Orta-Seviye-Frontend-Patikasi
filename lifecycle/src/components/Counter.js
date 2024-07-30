import React, { useEffect, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ali");

  useEffect(() => {
    console.log("Components mount edildi!");
    const interval = setInterval(() => {
        setNumber((n) => n + 1);
    }, 1000);

    return () => {
        console.log("Components unmount edildi!");
        clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    console.log("Number State güncellendi!");
  }, [number]);

  useEffect(() => {
    console.log("Name State güncellendi!");
  }, [name]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Ahmet")}>Click</button>
    </div>
  );
};

export default Counter;
