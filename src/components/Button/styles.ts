import styled from "styled-components";
import { flavor } from "../../flavors";

export const Container = styled.button<{ design: "green" | "gray" }>`
  background-color: ${(props) => {
    if (props.design === "green") {
      return flavor.colors.secondary;
    } else if (props.design === "gray") {
      return flavor.colors.buttonBackground2;
    }

    return "green";
  }};
  color: ${(props) => {
    if (props.design === "green") {
      return "white";
    } else if (props.design === "gray") {
      return flavor.colors.textColor;
    }
    return "white";
  }};

  padding: 12px 30px;
  width: 170px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;
