import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

// images
import guide_face from "../asset/img/guide_face.png";
import guide_arm from "../asset/img/guide_arm.png";
import guide_leg from "../asset/img/guide_leg.png";
import guide_test from "../asset/img/guide_test.png";

import { ReactComponent as SoundIcon } from "../asset/img/icon_sound.svg";
import { ReactComponent as ClearIcon } from "../asset/img/icon_clear.svg";

// sounds
import audio_face from "../asset/sound/audio3_face.m4a";
import audio_arm from "../asset/sound/audio4_arm.m4a";
import audio_leg from "../asset/sound/audio5_leg.m4a";
import audio_test from "../asset/sound/audio6_test.m4a";

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const fadeOut = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`;

const slideUp = keyframes`
  from { transform: translateY(100px)}
  to { transform: translateY(0px)}
`;

const slideDown = keyframes`
  from { transform: translateY(0px)}
  to { transform: translateY(100px)}
`;

const DarkBackground = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}

  .imgContainer {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${(props) =>
      props.disappear &&
      css`
        animation-name: ${slideDown};
      `}
  }

  img {
    width: 100%;
  }
`;

const playing = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(1.1)}
  100% {transform: scale(1)}
`;

const SoundBtn = styled.div`
  position: fixed;
  bottom: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #e3e3e3;
  padding: 10px;
  & > * {
    width: 100%;
    height: 100%;
  }

  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  ${(props) =>
    props.playing &&
    css`
      animation-name: ${playing};
    `}
`;

const images = [guide_face, guide_arm, guide_leg, guide_test];
const audios = [audio_face, audio_arm, audio_leg, audio_test];

function Guide({ visible, step, onCancel }) {
  const [img, setImg] = useState(images[0]);
  const [audio, setAudio] = useState(new Audio(audios[0]));
  const [playing, setPlaying] = useState(false);
  const [end, setEnd] = useState(false);

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  useEffect(() => {
    setImg(images[step]);
    setAudio(new Audio(audios[step]));
  }, [step]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false);
      setEnd(true);
      console.log("end");
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  const onClick = () => {
    if (end) {
      onCancel();
      setEnd(false);
    } else {
      setPlaying(true);
      audio.play();
    }
  };

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <div className="imgContainer">
        <img src={img} alt="guide_img" />
      </div>
      <SoundBtn onClick={onClick} playing={playing}>
        {end ? (
          <ClearIcon fill="#333333" />
        ) : (
          <SoundIcon fill={playing ? "#333333" : "#aaaaaa"} />
        )}
      </SoundBtn>
    </DarkBackground>
  );
}

export default Guide;
