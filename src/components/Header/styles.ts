import styled from "styled-components";
import { flavor } from "../../flavors";
import { bigSize, mediumSize } from "../../utils/mediaQueryData";

export const Container = styled.nav`
  background-color: #1d2430;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 999;
  @media (min-width: ${mediumSize}px) {
    justify-content: flex-start;
  }
  @media (min-width: ${bigSize}px) {
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    z-index: 999;
    @media (min-width: ${mediumSize}px) {
      margin-right: 10px;
      margin-left: 10px;
    }
    @media (min-width: ${bigSize}px) {
    }
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  margin-left: 8px;
  padding-left: 10px;
  border-left: 2px solid ${flavor.colors.textColor};
  li {
    display: inline-block;
    color: ${flavor.colors.textColor};
    & + li {
      margin-left: 10px;
    }
  }
  @media (min-width: ${mediumSize}px) {
  }
  @media (min-width: ${bigSize}px) {
  }
`;
