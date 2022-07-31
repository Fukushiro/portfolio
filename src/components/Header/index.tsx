import React from "react";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <a href="">
        <h1>Reed Barger</h1>
      </a>

      <li>
        <ul>Past work</ul>
        <ul>Skills</ul>
        <ul>Testemonials</ul>
      </li>
    </Container>
  );
}
