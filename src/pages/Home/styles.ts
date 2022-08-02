import styled from "styled-components";
import { flavor } from "../../flavors";
import {
  bigSize,
  mediumSize,
  smallSize,
  smallSizeMax,
} from "../../utils/mediaQueryData";

export const Container = styled.div`
  @media (min-width: ${mediumSize}px) {
  }
  @media (min-width: ${bigSize}px) {
  }
`;

export const Content = styled.div`
  @media (min-width: ${mediumSize}px) {
  }
  @media (min-width: ${bigSize}px) {
    padding: 0px 100px;
  }
`;
// myinfo section
export const MyInfos = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${mediumSize}px) {
    flex-direction: row;
  }
`;

export const MyInfosLeftDiv = styled.div`
  padding: 90px 32px;

  div {
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    button:first-of-type {
      margin-right: 15px;
    }
  }
  p {
    color: ${flavor.colors.textColor};
  }
`;
export const MyInfosRightDiv = styled.div``;

export const Title = styled.h1``;

// apps i build

export const AppsIBuild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 32px;
  /* background-color: red; */
  h1 {
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    color: ${flavor.colors.textColor};
    padding: 0px 50px;

    @media (min-width: ${mediumSize}px) {
      padding: 0px 100px;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;

  @media (min-width: ${mediumSize}px) {
    grid-template-columns: 50% 50%;
  }

  @media (min-width: ${bigSize}px) {
    grid-template-columns: 33% 33% 33%;
  }
  img {
    width: 300px;
    @media (min-width: ${mediumSize}px) {
      width: 300px;
    }
    @media (min-width: ${bigSize}px) {
      width: 300px;
    }
  }
`;
