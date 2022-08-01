import styled from "styled-components";
import Hamburger from "hamburger-react";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const HamburguerView = styled.div`
  position: absolute;
  top: 6px;
  left: 10px;
`;
export const Content = styled.div`
  margin-top: 54px;
  width: 200px;
  background-color: #1d2430;

  ul {
    list-style: none;

    li {
      button {
        width: 100%;
        height: 30px;
        &:hover {
          background-color: #1b2222;
        }
      }
      & + li {
        margin-top: 7px;
      }
    }
  }
`;
