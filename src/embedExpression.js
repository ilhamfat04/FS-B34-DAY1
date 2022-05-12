import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "Fullstack"
  }

  //Create a variable here
  const companyName = "Dumbways"

  return (
    // Code Inside div
    <div>
      <p>
        Hello batch 34 {getMajor()}, Welcome to {companyName}
      </p>
    </div>
  );
}

export default EmbedExpression;
