import React from "react";

export default function Form({ name }) {
  return (
    <form>
      <label for={name}>{name}</label>
      <input type="text" placeholder={name} id={name} />
    </form>
  );
}
