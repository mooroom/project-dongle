import React from "react";

// packages
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// components
import Navbar from "../components/Navbar";
import BodyBackground from "../components/BodyBackground";
import Button from "../components/Button";
import Container from "../components/Container";
import BottomBox from "../components/BottomBox";

// images
import dongle from "../asset/img/dongle_baby.png";

// sounds
import audio from "../asset/sound/prepare_1.m4a";

// hooks
import { useAudio } from "../hooks/useAudio";

const ImageClip = styled.div`
  width: 100%;
  padding: 20%;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffea6c;
  box-sizing: border-box;
  clip-path: circle(40% at 50% 45%);
  margin-top: 1.5rem;
  transition: all 0.25s ease-in;
  opacity: 0.5;
  img {
    width: 100%;
  }
  ${(props) =>
    props.isPlaying &&
    css`
      opacity: 1;
    `}
`;

function Prepare(props) {
  const [onPlay, playing, ended] = useAudio(audio);

  return (
    <div style={{ color: "white" }}>
      <BodyBackground color="#8C63BC" />
      <Navbar color="transparent" />
      <Container flex>
        <h2>인공지능 동글이 키우기</h2>
        <ImageClip isPlaying={playing}>
          <img src={dongle} alt="dongle" />
        </ImageClip>
        <p style={{ textAlign: "center" }}>
          인공지능 동글이에게
          <br />
          얼굴, 팔, 다리를 만들어주세요!
        </p>
      </Container>
      <BottomBox>
        <Link to={ended && "/"}>
          <Button width="100%" onClick={!ended && onPlay}>
            {ended ? "다음으로" : "준비하기"}
          </Button>
        </Link>
      </BottomBox>
    </div>
  );
}

export default Prepare;
