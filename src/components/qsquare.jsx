import React from "react";
import "../styles/qsquare.css";
import Computer from "./computer";

export default function Qsquare() {
  const users = [
    {
      imageurl: "./images/black.system.jpg",
      subtitle: "This is a computer",
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
    },
    {
      imageurl: "./images/black.jpg",
      subtitle: "This is a computer",
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
    },
    {
      imageurl: "./images/Lapi.jpg",
      subtitle: "This is a computer",
      id: 3,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
    },
    {
      imageurl: "./images/computer.jpg",
      subtitle: "This is a computer",
      id: 4,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
    },
    {
      imageurl: "./images/Lp.jpg",
      subtitle: "This is a computer",
      id: 5,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
      button: "buy now",
    },
    {
      imageurl: "./images/system.jpg",
      subtitle: "This is a computer",
      id: 6,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
      button: "buy now",
    },
    {
      imageurl: "./images/S.Laptop.jpg",
      subtitle: "This is a computer",
      id: 7,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
      button: "buy now",
    },
    {
      imageurl: "./images/LPo.jpg",
      subtitle: "This is a computer",
      id: 8,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
      button: "sell out",
    },
    {
      imageurl: "./images/laptop.back.jpg",
      subtitle: "This is a computer",
      id: 9,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempore dolore id officia molestiae possimus amet dolor obcaecati, nemo odio?",
      button: "sell out",
    },
  ];

  return (
    <section>
      <div className="company-main">
        {users.map((user) => (
          <Computer item={user} />
        ))}
      </div>
    </section>
  );
}
