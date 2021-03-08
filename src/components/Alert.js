import React from "react";

// packages
import styled, { css } from "styled-components";

const AlertBlock = styled.div`
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 0 40px;
  box-sizing: border-box;
  opacity: 0;
  transition: all 0.5s ease-in;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

const AlertModal = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  text-align: center;
  word-break: keep-all;
`;

function Alert({ text, show }) {
  return (
    <AlertBlock show={show}>
      <AlertModal>{text}</AlertModal>
    </AlertBlock>
  );
}

Alert.defaultProps = {
  text: "앗 내가 알려주는 내용을 모두 듣고나서 다음단계로 갈 수 있어~",
};

export default Alert;
