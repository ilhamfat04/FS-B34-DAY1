import React, { useState } from "react";

function State() {
  //init State
  // let name = "ilham fathullah"
  // name = "jody septiawan"

  const [counter, setCounter] = useState(0)
  // counter = "jody septiawan"

  //Create Function Add
  function add() {
    setCounter(counter + 2)
  }

  //Create Function Less
  function less() {
    setCounter(counter - 1)
  }

  return (
    // Code Inside div
    <div>
      <p>If you click add button it will be increase by 1, and less button its opposite</p>
      <h1>{counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={less}>Less</button>
    </div>
  );
}

export default State;
