import React, { useState, useEffect } from "react";

// packages
import styled, { css, keyframes } from "styled-components";

const popUp = keyframes`
    50% {
        transform: translateY(-5px);
        opacity: 1;
    }
    100% {
        transform: translateY(0px);
        opacity: 0;
    }
`;

const CounterBlock = styled.div`
  font-size: 2rem;
  color: #55119E;
  font-weight: bold;
  opacity: 0;
  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${popUp};
    `}
`;

function Counter({ count }) {
  // const [localCount, setLocalCount] = useState(count);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 250);
  }, [count]);

  return (
    <CounterBlock animate={animate}>
      {count === 0 ? null : `${8 - count}장 더!`}
    </CounterBlock>
  );
}

export default Counter;
