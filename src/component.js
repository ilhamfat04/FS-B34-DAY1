import React from "react";

// import component Header
import Header from "./components/header";

function Component() {
  return (
    //   Code Here
    <div>
      <Header />
      <Content />
      <Header />
      <Button />
    </div>
  );
}

// Create a new component here
function Content() {
  return (
    <div>
      <h1>
        This is content, bro
      </h1>
    </div>
  )
}

function Button() {
  return (
    <div>
      <button>Click me</button>
    </div>
  )
}

export default Component;
