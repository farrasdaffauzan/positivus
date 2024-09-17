import React from "react";

function Button({ name, text }) {
  return (
    <div className={`${text} p-3  border rounded-lg`}>
      <button>{name}</button>
    </div>
  );
}

export default Button;
