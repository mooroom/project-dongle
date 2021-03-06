import React from "react";

// pakages
import styled, { createGlobalStyle, css } from "styled-components";

const ContainerBlock = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  overflow: scroll;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `};

  ${(props) => {
    const background = props.background;
    const top = props.top;
    const bottom = props.bottom;
    return css`
      background: ${background};
      padding-top: ${top};
      padding-bottom: ${bottom};
    `;
  }}
`;

function Container({ children, ...rest }) {
  return <ContainerBlock {...rest}>{children}</ContainerBlock>;
}

export default Container;
