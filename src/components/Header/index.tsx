import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { smallSize, smallSizeMax } from "../../utils/mediaQueryData";
import { BurguerMenu, BurguerMenuAction } from "../BurguerMenu";
import { Container } from "./styles";

export function Header() {
  const navigate = useNavigate();
  const isSmall = useMediaQuery({ query: `(max-width: ${smallSizeMax}px)` });
  const burguerMenuActions: BurguerMenuAction[] = [
    { title: "Past work", action: () => {} },
    { title: "Skills", action: () => {} },
    { title: "Testemonials", action: () => {} },
  ];
  return (
    <Container>
      <a href="">
        <h1>Reed Barger {isSmall ? "a" : "b"}</h1>
      </a>
      {isSmall && <BurguerMenu itens={burguerMenuActions} />}
      {!isSmall && (
        <ul>
          <li>Past work</li>
          <li>Skills</li>
          <li>Testemonials</li>
        </ul>
      )}
    </Container>
  );
}
