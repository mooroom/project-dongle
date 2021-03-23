import React, { useState, useEffect } from "react";

// packages
import styled, { css } from "styled-components";

const CounterBlock = styled.div`
  padding: 5px 8px;
  box-sizing: border-box;
  background: #e3e3e3;
  border-radius: 10px;
  font-size: 1.5rem;
  color: #333333;
  font-weight: bold;
  opacity: 0;
  transition: all 0.25s ease-in;

  ${({ animate }) =>
    animate &&
    css`
      opacity: 1;
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
    <>
      {count === 0 ? null : (
        <CounterBlock animate={animate}>{`${8 - count}장 더!`}</CounterBlock>
      )}
    </>
  );
}

export default Counter;
