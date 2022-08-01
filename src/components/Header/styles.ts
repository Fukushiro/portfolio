import styled from "styled-components";
import { bigSize, mediumSize } from "../../utils/mediaQueryData";

export const Container = styled.nav`
  background-color: #1d2430;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  @media (min-width: ${mediumSize}px) {
    justify-content: flex-start;
  }
  @media (min-width: ${bigSize}px) {
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    @media (min-width: ${mediumSize}px) {
    }
    @media (min-width: ${bigSize}px) {
    }
  }
`;
