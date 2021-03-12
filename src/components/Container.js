import React from "react";

// pakages
import styled, { css } from "styled-components";

const ContainerBlock = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};

  ${(props) => {
    const background = props.background;
    const top = props.top;
    const bottom = props.bottom;
    const height = props.height;
    return css`
      background: ${background};
      padding-top: ${top};
      padding-bottom: ${bottom};
      height: ${height};
    `;
  }}
`;

function Container({ children, ...rest }) {
  return <ContainerBlock {...rest}>{children}</ContainerBlock>;
}

export default Container;
