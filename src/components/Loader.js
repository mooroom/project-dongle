import React, { useEffect, useState } from "react";

// packages
import styled, { css, keyframes } from "styled-components";

// images
import dongle_face from "../asset/img/dongle_face.gif";
import dongle_arm from "../asset/img/dongle_arm.gif";
import dongle_leg from "../asset/img/dongle_leg.gif";

import { ReactComponent as DoneIcon } from "../asset/img/icon_done.svg";

const rotate = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`;

const scale = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.2)}
    100% {transform: scale(1)}
`;

const GifBlock = styled.div`
  visibility: hidden;
  width: 100%;
  transition: all 0.5s ease-in;
  opacity: 0;

  img {
    width: 100%;
    filter: drop-shadow(0px 0px 10px white);
  }

  .text {
    padding: 5px 8px;
    box-sizing: border-box;
    background: #e3e3e3;
    border-radius: 10px;
    font-size: 1.5rem;
    color: #333333;
    font-weight: bold;
    height: 2.5rem;
    text-align: center;
    margin-top: 1rem;
  }

  ${({ show }) =>
    show &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const LoaderButton = styled.div`
  position: absolute;
  bottom: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(#55119e, #c3a3e5);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    visibility: hidden;
  }

  animation: ${rotate} 0.4s linear infinite;
  transition: all 0.25s ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 50%;
    background: linear-gradient(#55119e, #c3a3e5);
    filter: blur(10px);
  }

  ${(props) =>
    !props.isLoading &&
    css`
      background: #55119e;
      animation: ${scale} 0.25s cubic-bezier(0.1, -0.6, 0.2, 0) 1;
      &::before {
        visibility: hidden;
      }
      & > * {
        visibility: visible;
      }
    `}
`;

const gifs = [dongle_face, dongle_arm, dongle_leg];
const texts = ["얼굴을 만들었어요!", "팔을 만들었어요!", "다리를 만들었어요!"];

function Loader({ visible, step, setGuide, setStep, setLoading }) {
  const [gif, setGif] = useState(gifs[step]);
  const [text, setText] = useState(texts[step]);
  const [show, setShow] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setLocalLoading(false);
        setShow(true);
      }, 3000);
    }
  }, [visible]);

  useEffect(() => {
    setGif(gifs[step]);
    setText(texts[step]);
  }, [step]);

  const onClick = () => {
    if (!localLoading) {
      setLoading(false);
      setGuide(true);
      setStep((step) => step + 1);

      setShow(false);
      setLocalLoading(true);
    }
  };

  if (!visible) return null;
  return (
    <>
      <GifBlock show={show}>
        <img src={gif} alt="gif" />
        <div className="text">{text}</div>
      </GifBlock>
      <LoaderButton isLoading={localLoading} onClick={onClick}>
        <DoneIcon fill="white" />
      </LoaderButton>
    </>
  );
}

export default Loader;
