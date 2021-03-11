import React, { useEffect, useState } from "react";

// packages
import styled, { css, keyframes } from "styled-components";

// components
import BottomBox from "./BottomBox";
import Button from "./Button";

// images
import dongle_face from "../asset/img/dongle_face.gif";
import dongle_arm from "../asset/img/dongle_arm.gif";
import dongle_leg from "../asset/img/dongle_leg.gif";

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const fadeOut = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
`;

const LoaderBlock = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}

  .text {
    font-size: 1.5rem;
    color: white;
  }
  img {
    width: 100%;
    filter: drop-shadow(0px 0px 10px white);
  }
`;

const LoaderObj = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background: linear-gradient(#55119e, #c3a3e5);
  border-radius: 50%;
  animation: rotate 0.4s linear infinite;
  transition: all 0.4s ease-in;

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

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader({ visible, onCancel, step }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [loading, setLoading] = useState(true);

  const [dongle, setDongle] = useState(dongle_face);
  const [dongleText, setDongleText] = useState("얼굴을 만들었어요!");

  useEffect(() => {
    switch (step) {
      case "arm":
        setDongle(dongle_arm);
        setDongleText("팔을 만들었어요!");
        break;
      case "leg":
        setDongle(dongle_leg);
        setDongleText("다리를 만들었어요!");
        break;
      default:
        setDongle(dongle_face);
    }
  }, [step]);

  useEffect(() => {
    if (localVisible && visible) {
      setTimeout(() => setLoading(false), 3000);
    }
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  const onClick = () => {
    onCancel();
    setLoading(true);
  };

  if (!animate && !localVisible) return null;
  return (
    <>
      <LoaderBlock disappear={!visible}>
        {!loading && <div className="text">{dongleText}</div>}
        {!loading && <img src={dongle} alt="gif" />}
        {loading && <LoaderObj />}
      </LoaderBlock>
      {!loading && (
        <BottomBox zIndex="1000">
          <Button width="100%" onClick={onClick}>
            다음
          </Button>
        </BottomBox>
      )}
    </>
  );
}

export default Loader;
