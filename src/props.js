import React from "react";

//Import Components
import List from "./components/list";

function Props() {

  const name = "Buggati"
  const color = "Blue"
  const qty = "10"
  return (
    // Code Inside div
    <div>
      <p>Element img using default props</p>
      <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />


      <List carName="Mercedez Benz" color="Red" qty="100" />
      <List carName={name} color={color} qty={qty} />
      <List />
    </div>

  );
}

export default Props;
