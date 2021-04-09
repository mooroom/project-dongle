import React from "react";

// packages
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const fadeOut = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
`;

const BottomBoxBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 50px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;

  ${(props) =>
    props.nonfix &&
    css`
      position: relative;
      padding: 30px 0px;
    `}

  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}

  ${(props) =>
    props.animate &&
    css`
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    `}

    ${({ disappear }) =>
    disappear
      ? css`
          animation-name: ${fadeOut};
        `
      : css`
          animation-name: ${fadeIn};
        `}
`;

function BottomBox({ children, ...rest }) {
  return <BottomBoxBlock {...rest}>{children}</BottomBoxBlock>;
}

export default BottomBox;
