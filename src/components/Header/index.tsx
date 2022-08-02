import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { urls } from "../../routes";
import { smallSize, smallSizeMax } from "../../utils/mediaQueryData";
import { BurguerMenu, BurguerMenuAction } from "../BurguerMenu";
import { Touchable } from "../Touchable";
import { Container, LinkList } from "./styles";

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
        <h1>Reed Barge</h1>
      </a>
      {isSmall && <BurguerMenu itens={burguerMenuActions} />}
      {!isSmall && (
        <LinkList>
          {burguerMenuActions.map((value, index) => (
            <li key={index}>
              <Touchable
                onClick={() => {
                  value.action();
                }}
              >
                {value.title}
              </Touchable>
            </li>
          ))}
        </LinkList>
      )}
    </Container>
  );
}
