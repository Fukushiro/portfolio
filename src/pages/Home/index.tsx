import React from "react";
import { Header } from "../../components/Header";
import {
  AppsIBuild,
  Container,
  Content,
  ImagesContainer,
  MyInfos,
  MyInfosLeftDiv,
  MyInfosRightDiv,
  Title,
} from "./styles";
import Lottie from "react-lottie";
import programingAnimation from "../../assets/animations/programing.json";
import { Button } from "../../components/Button";
import { IoLogoJavascript } from "react-icons/io5";
import imagem from "../../assets/images/image.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        {/* my infos */}
        <MyInfos>
          <MyInfosLeftDiv>
            <Title>
              Hi, im João Pedro Fukushiro. I love to build amazing apps.
            </Title>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <Button text="Work With Me" design="green" onClick={() => {}} />
              <Button
                text="See my past jobs"
                design="gray"
                onClick={() => {}}
              />
            </div>
          </MyInfosLeftDiv>
          <MyInfosRightDiv>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: programingAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={400}
              width={400}
            />
          </MyInfosRightDiv>
        </MyInfos>
        {/* apps i build */}

        <AppsIBuild>
          <IoLogoJavascript size={30} />
          <h1>Apps I've Built</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ImagesContainer>
            <img src={imagem} />
            <img src={imagem} />
            <img src={imagem} />
            <img src={imagem} />
            <img src={imagem} />
          </ImagesContainer>
        </AppsIBuild>
      </Content>
    </Container>
  );
}
