import React, { useState } from "react";
import { Container, Content, HamburguerView } from "./styles";
import Hamburger from "hamburger-react";
import { Touchable } from "../Touchable";
export interface BurguerMenuAction {
  title: string;
  action: () => void;
}
interface BurguerMenuProps {
  itens: BurguerMenuAction[];
}
export function BurguerMenu(props: BurguerMenuProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Container>
      <HamburguerView>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburguerView>
      {isOpen && (
        <Content>
          <ul>
            {props.itens.map((value, index) => (
              <li key={index}>
                <Touchable onClick={value.action}>{value.title}</Touchable>
              </li>
            ))}
          </ul>
        </Content>
      )}
    </Container>
  );
}
