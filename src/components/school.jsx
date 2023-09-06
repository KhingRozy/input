import React from "react";
import "../styles/school.css";
import Schoolbackend from "./schoolbackend";

export default function School({ item }) {
  return (
    <section className="school-main">
      <div className="school-detail">
        <h1>{item.courses}</h1>

        <h4>{item.id}</h4>
        <h2>{item.student}</h2>
        <h4>{item.category}</h4>
        <h4>{item.course}</h4>
        <h5>{item.score}</h5>
      </div>
    </section>
  );
}
