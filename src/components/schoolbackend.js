import React from "react";
import School from "./school";

export default function Schoolbackend() {
  const users = [
    {
      courses:
        "Computer Science, Business Studies, Economic, Mathematic, Social Studies, C.R.K, Physics, Chemistry, Art, Commerces",
    },

    {
      id: 1,
      student: "Gbenga",
      category: "science",
      course: "physics, Chemistry",
      score: 50 / 100,
    },

    {
      id: 2,
      student: "philp",
      category: "Art",
      course: "C.R.K, Art",
      score: 66 / 100,
    },

    {
      id: 3,
      student: "James",
      category: "Commercial",
      course: "Commercs, Economics",
      score: 45 / 100,
    },

    {
      id: 4,
      student: "Micheal",
      category: "Commercial",
      course: "Mathematics, Economics",
      score: 80 / 100,
    },

    {
      id: 5,
      student: "Jason",
      category: "Commercial",
      course: "Business Studies, Social Studies",
      score: 79 / 100,
    },
  ];

  return (
    <section>
      <div>
        {users.map((user) => (
          <School item={user} />
        ))}
      </div>
    </section>
  );
}
