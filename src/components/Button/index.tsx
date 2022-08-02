import React from "react";
import { Container } from "./styles";
interface ButtonProps {
  text: string;
  onClick: () => void;
  design: "green" | "gray";
}
export function Button(props: ButtonProps) {
  return (
    <Container onClick={props.onClick} design={props.design}>
      {props.text}
    </Container>
  );
}
