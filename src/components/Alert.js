import React, { useState, useEffect } from "react";

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
  visibility: hidden;
  opacity: 0;
  transition: all 1.5s cubic-bezier(0.19, 0.58, 0.61 , 0.92);
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
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
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if(show) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  })
  return (
    <AlertBlock visible={visible}>
      <AlertModal>{text}</AlertModal>
    </AlertBlock>
  );
}

Alert.defaultProps = {
  text: "앗 내가 알려주는 내용을 모두 듣고나서 다음단계로 갈 수 있어~",
};

export default Alert;
