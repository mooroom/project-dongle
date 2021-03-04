import React from "react";

function Learn({ match }) {
  const { num } = match.params;
  return <div>{`Learn${num}`}</div>;
}

export default Learn;
