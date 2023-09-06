import React from "react";

export default function Input({ placeholder, title, className }) {
  return (
    <section className={className}>
      <input type="text" placeholder={placeholder} />
      <button type="submit">{title}</button>
    </section>
  );
}
