import React from "react";
// import Button from "./button";
import "../styles/contact.css";

import Input from "./input";
import Form from "./form";

export default function Contact() {
  return (
    <section>
      {/* <Input placeholder="Search..." title="Search" className="contact-input" /> */}
      <Form name="firstName" />
      <Form name="lastName" />
      <Form name="Addresss" />
      <Form name="Tel" />
      <Form name="Email" />
    </section>
  );
}
