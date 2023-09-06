import React from "react";
import "../styles/computer.css";
import Qsquare from "./qsquare";

export default function Computer({ item }) {
  return (
    <section className="company">
      <img
        src={item.imageurl}
        alt={"image of" + item.imageurl}
        className="company-img"
      />

      <div className="company-details">
        <span className="company-profile-1">
          <h4>{item.subtitle}</h4>
          <h3>{item.content}</h3>
          <button>{item.button}</button>
        </span>
      </div>
    </section>
  );
}
