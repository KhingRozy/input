import React from "react";

export default function Button({ title, className }) {
  return (
    <section>
      <button className={`${className}`} function>
        {title}
      </button>
    </section>
  );
}
