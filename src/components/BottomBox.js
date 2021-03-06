import React from "react";

// packages
import styled from "styled-components";

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
`;

function BottomBox({ children, ...rest }) {
  return <BottomBoxBlock {...rest}>{children}</BottomBoxBlock>;
}

export default BottomBox;
