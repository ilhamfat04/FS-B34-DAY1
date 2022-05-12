import React from "react";

function Event() {
  //Create function here
  function greeting() {
    return alert('Hello everyone there')
  }

  return (
    // Code Inside div
    <div>
      <p>
        If you press
        <b> Click Here</b> then the allert will be appear
        {/* <button onClick={alert("Hello batch 34 FS")} > Click Here</button> */}
        <button onClick={() => alert("Hello batch 34 FS")} > Click Here</button>
      </p>
      <p>
        If you press
        <b> Greeting</b> then the allert will be appear
        {/* <button onClick={greeting()} > Greeting</button> */}
        <button onClick={greeting} > Greeting</button>
      </p>
    </div>
  );
}

export default Event;
