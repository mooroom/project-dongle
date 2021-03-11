import React from "react";

// packages
import styled, { css, keyframes } from "styled-components";

// images
import dongle_thinking from "../asset/img/dongle_thinking1.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ClassifierBlock = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;

  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  img {
    width: 100%;
  }
`;

function Classifier({ visible }) {
  if (!visible) return null;

  return (
    <ClassifierBlock>
      <img src={dongle_thinking} alt="img" />
    </ClassifierBlock>
  );
}

export default Classifier;
