import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Faisal");

  // defining a function inside a functional component
  const handleNameChange = () => {
    const names = ["Faisal", "Lawan", "Muhammad"];
    const int = Math.floor(Math.random() * 3);
    // changing the state of the component
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={() => handleClick()}>Hello {name}</p>

      <button onClick={() => handleNameChange()}>Change</button>
      <button onClick={() => handleClick2("Sakina")}>Click it 2</button>
      <button onClick={(e) => handleClick3(e)}>Click it 3</button>
    </main>
  );
};

export default Content;
